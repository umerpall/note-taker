import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { HiAdjustments } from "react-icons/hi";

const Searchbar = ({ setSearchedNotesList, noteLists, setSortOrder }) => {
  const [showAdjustmentPopup, setShowAdjustmentPopup] = useState(false);
  const [textSearch, setTextSearch] = useState("");

  const handleSearch = (e) => {
    if (e.keyCode === 13 && textSearch !== "") {
      const newList = noteLists.filter((note) => {
        return (
          note.title.includes(textSearch) || note.body.includes(textSearch)
        );
      });
      setSearchedNotesList(newList);
    }
  };

  return (
    <div className="search">
      <div className="searchbar">
        <BsSearch className="search_icon" />
        <input
          type="search"
          placeholder="Search..."
          onKeyDown={(e) => handleSearch(e)}
          onChange={(e) => {
            setTextSearch(e.target.value);
            if (e.target.value === "") {
              setSearchedNotesList([]);
            }
          }}
          value={textSearch}
        />
        <div onClick={() => setShowAdjustmentPopup((prev) => !prev)}>
          <HiAdjustments className="adjustment_icon" />
        </div>
      </div>
      {showAdjustmentPopup && (
        <div className="adjustment_popup">
          <span onClick={() => setSortOrder(0)}>Sort by Created At</span>
          <span onClick={() => setSortOrder(1)}>Sort by Modified At</span>
          <span onClick={() => setSortOrder(2)}>Sort by Text</span>
        </div>
      )}
    </div>
  );
};

export default Searchbar;
