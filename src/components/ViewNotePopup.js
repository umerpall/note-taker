const ViewNotePopup = ({ setShowPopup, previewNote }) => {
  return (
    <div className="blur">
      <div className="new_note_popup">
        <div className="close_popup" onClick={() => setShowPopup(0)}>
          x
        </div>
        <div className="title">
          <h3>Title</h3>
          <p>{previewNote.title}</p>
        </div>
        <div className="body">
          <h3>Body</h3>
          <p>{previewNote.body}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewNotePopup;
