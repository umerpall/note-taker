import "./App.css";
import Searchbar from "./components/Searchbar";
import NoteList from "./components/NoteList";
import NewNotePopup from "./components/NewNotePopup";
import { useState } from "react";
import EditNotePopup from "./components/EditNotePopup";
import ViewNotePopup from "./components/ViewNotePopup";

function App() {
  const [showPopup, setShowPopup] = useState(0);
  const [noteLists, setNoteLists] = useState([]);
  const [editNote, setEditNote] = useState({});
  const [previewNote, setPreviewNote] = useState("");
  const [searchedNotesList, setSearchedNotesList] = useState([]);
  const [sortOrder, setSortOrder] = useState(1);

  console.log(noteLists);
  return (
    <div className="App">
      <Searchbar
        setSearchedNotesList={setSearchedNotesList}
        noteLists={noteLists}
        setSortOrder={setSortOrder}
      />
      <NoteList
        noteLists={searchedNotesList.length ? searchedNotesList : noteLists}
        setShowPopup={setShowPopup}
        setEditNote={setEditNote}
        setPreviewNote={setPreviewNote}
        setNoteLists={setNoteLists}
        sortOrder={sortOrder}
      />
      {showPopup === 1 && (
        <NewNotePopup setNoteLists={setNoteLists} setShowPopup={setShowPopup} />
      )}
      {showPopup === 2 && (
        <EditNotePopup
          noteLists={noteLists}
          editNote={editNote}
          setShowPopup={setShowPopup}
          setNoteLists={setNoteLists}
        />
      )}
      {showPopup === 3 && (
        <ViewNotePopup previewNote={previewNote} setShowPopup={setShowPopup} />
      )}
    </div>
  );
}

export default App;
