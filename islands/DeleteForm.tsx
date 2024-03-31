import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

const DeleteForm: FunctionComponent<{ name: string; closeModal: () => void }> =
  ({ name, closeModal }) => {
    const [creator, setCreator] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleDelete = async () => {
      if (!creator) {
        setError("Creator is required.");
        return;
      }

      try {
        const res = await fetch("/api", {
          method: "DELETE",
          body: JSON.stringify({ creator: creator, name: name }),
        });

        if (res.status !== 204) {
          const msg = await res.text();
          setError(msg);
        } else {
          window.location.href = "/";
        }
      } catch (e) {
        console.log(e);
        setError(e.message);
      }
    };

    return (
      <div class="deleteForm">
        <h2>Delete {name}</h2>
        <input
          type="text"
          name="creator"
          id="creator"
          autoComplete="off"
          placeholder="Creator name"
          value={creator}
          onInput={(e) => {
            setCreator(e.currentTarget.value);
            setError("");
          }}
        />
        <div class="buttons">
          <button onClick={handleDelete}>Delete</button>
          <button onClick={closeModal}>Close</button>
        </div>
        {error && <span>{error}</span>}
      </div>
    );
  };

export default DeleteForm;
