import { useState } from "react";

const EditNotePopup = ({ setShowPopup, editNote, noteLists, setNoteLists }) => {
  const [newEditNote, setNewEditNote] = useState(editNote);

  const handleSaveEdit = () => {
    setNoteLists((prev) => {
      return prev.map((note) => {
        if (note.id === editNote.id) {
          return {
            ...note,
            title: newEditNote.title,
            body: newEditNote.body,
            modifiedAt: new Date(),
          };
        }
        return note;
      });
    });
    setShowPopup(0);
  };

  return (
    <div className="blur">
      <div className="new_note_popup">
        <h3>Edit Note</h3>
        <div className="inputs">
          <label htmlFor="title">Title</label>{" "}
          <input
            id="title"
            type="text"
            onChange={(e) =>
              setNewEditNote((prev) => ({ ...prev, title: e.target.value }))
            }
            value={newEditNote.title}
          />
          <label htmlFor="body">Body</label>{" "}
          <textarea
            id="body"
            value={newEditNote.body}
            onChange={(e) =>
              setNewEditNote((prev) => ({ ...prev, body: e.target.value }))
            }
          />
        </div>
        <div className="create_note_btn">
          <button onClick={() => setShowPopup(0)}>Cancel</button>
          <button onClick={() => handleSaveEdit()}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditNotePopup;
