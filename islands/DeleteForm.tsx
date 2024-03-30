import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

const DeleteForm: FunctionComponent<{ name: string }> = ({ name }) => {
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
      console.log(res.status);

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
      <label for="creator">Creator</label>
      <input
        type="text"
        name="creator"
        id="creator"
        autoComplete="off"
        value={creator}
        onInput={(e) => {
          setCreator(e.currentTarget.value);
          setError("");
        }}
      />
      <button onClick={handleDelete}>Delete</button>
      {error && <span>{error}</span>}
    </div>
  );
};

export default DeleteForm;
