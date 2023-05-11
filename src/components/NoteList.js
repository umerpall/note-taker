import Note from "./Note";

const NoteList = ({
  setShowPopup,
  noteLists,
  setEditNote,
  setPreviewNote,
  setNoteLists,
  sortOrder,
}) => {
  return (
    <div className="note_list_container">
      <div>
        <h2>Notes</h2>
        <div className="new_note_btn" onClick={() => setShowPopup(1)}>
          New +
        </div>
      </div>
      <div className="note_list">
        {noteLists
          .sort((a, b) => {
            if (sortOrder === 0) {
              return b.createdAt - a.createdAt;
            } else if (sortOrder === 1) {
              return b.modifiedAt - a.modifiedAt;
            } else {
              return a.title.localeCompare(b.title);
            }
          })
          .map((note) => (
            <Note
              note={note}
              setShowPopup={setShowPopup}
              key={note.id}
              noteLists={noteLists}
              setEditNote={setEditNote}
              setPreviewNote={setPreviewNote}
              setNoteLists={setNoteLists}
            />
          ))}
      </div>
    </div>
  );
};

export default NoteList;
