import { useState } from "react";

const NewNotePopup = ({ setShowPopup, setNoteLists }) => {
  const [newNote, setNewNote] = useState({
    title: "",
    body: "",
    id: "",
    createdAt: "",
    modifiedAt: "",
  });

  const handleSave = () => {
    if (newNote.title === "" || newNote.body === "") {
      alert("Please fill all fields");
    } else {
      setNoteLists((prev) => [
        ...prev,
        {
          title: newNote.title,
          body: newNote.body,
          id: Math.floor(Math.random() * (99999999 - 9999999)) + 9999999,
          createdAt: new Date(),
          modifiedAt: new Date(),
        },
      ]);
      setShowPopup(0);
    }
  };
  return (
    <div className="blur">
      <div className="new_note_popup">
        <h3>New Note</h3>
        <div className="inputs">
          <label htmlFor="title">Title</label>{" "}
          <input
            onChange={(e) =>
              setNewNote((prev) => ({ ...prev, title: e.target.value }))
            }
            id="title"
            type="text"
            value={newNote.title}
          />
          <label htmlFor="body">Body</label>{" "}
          <textarea
            onChange={(e) =>
              setNewNote((prev) => ({ ...prev, body: e.target.value }))
            }
            value={newNote.body}
            id="body"
          />
        </div>
        <div className="create_note_btn">
          <button onClick={() => setShowPopup(0)}>Cancel</button>
          <button onClick={() => handleSave()}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default NewNotePopup;
