import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Note = ({
  setShowPopup,
  note,
  setEditNote,
  noteLists,
  setPreviewNote,
  setNoteLists,
}) => {
  const [showActions, setShowActions] = useState(false);

  const handleEdit = (id) => {
    const note = noteLists.filter((note) => note.id === id);
    setEditNote(note[0]);
  };

  const handlePreview = (id) => {
    const note = noteLists.filter((note) => note.id === id);
    setPreviewNote(note[0]);
    setShowPopup(3);
  };

  const handleDelete = (id) => {
    const updatedNoteList = noteLists.filter((note) => note.id !== id);
    setNoteLists(updatedNoteList);
  };

  return (
    <div className="note">
      <div className="action_btn">
        <div onClick={() => setShowActions((prev) => !prev)}>
          <BsThreeDotsVertical />
        </div>
        {showActions && (
          <div className="actions">
            <span
              onClick={() => {
                setShowPopup(2);
                handleEdit(note.id);
              }}
            >
              Edit
            </span>
            <span onClick={() => handleDelete(note.id)}>Delete</span>
          </div>
        )}
      </div>
      <div className="title" onClick={() => handlePreview(note.id)}>
        {note.title}
      </div>
      <div className="body" onClick={() => handlePreview(note.id)}>
        {note.body}
      </div>
    </div>
  );
};

export default Note;
