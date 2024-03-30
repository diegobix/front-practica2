import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

const CreateForm: FunctionComponent = () => {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [sound, setSound] = useState<string>("");
  const [creator, setCreator] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async () => {
    if (!name || !image || !sound || !creator) {
      setError("Every field is required.");
      return;
    }

    try {
      const res = await fetch("/api", {
        method: "POST",
        body: JSON.stringify({ name, image, sound, creator }),
      });
      if (res.status !== 201) {
        const msg = await res.text();
        setError(msg);
      } else {
        window.location.href = "/";
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div class="formContainer">
      <div class="createForm">
        <h2>Add your hero</h2>
        <label for="name">
          <i class="fa-solid fa-mask"></i>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          autoComplete="off"
          value={name}
          onInput={(e) => {
            setName(e.currentTarget.value);
            setError("");
          }}
        />
        <label for="image">
          <i class="fa-solid fa-image"></i>
        </label>
        <input
          type="url"
          name="image"
          id="image"
          placeholder="Url"
          autoComplete="off"
          value={image}
          onInput={(e) => {
            setImage(e.currentTarget.value);
            setError("");
          }}
        />
        <label for="sound">
          <i class="fa-solid fa-music"></i>
        </label>
        <input
          type="url"
          name="sound"
          id="sound"
          placeholder="Url"
          autoComplete="off"
          value={sound}
          onInput={(e) => {
            setSound(e.currentTarget.value);
            setError("");
          }}
        />
        <label for="creator">
          <i class="fa-solid fa-user"></i>
        </label>
        <input
          type="text"
          name="creator"
          id="creator"
          placeholder="Creator"
          autoComplete="off"
          value={creator}
          onInput={(e) => {
            setCreator(e.currentTarget.value);
            setError("");
          }}
        />

        <button onClick={handleSubmit}>Create</button>
        {error && <span>{error}</span>}
      </div>
    </div>
  );
};

export default CreateForm;
