import { useContext, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import "./Search.css";
function Search({ onSearch, newSong, setNewSong }) {
  return (
    <div className="form">
      <input
        autoFocus
        className="form-input"
        type="text"
        value={newSong}
        placeholder="Enter Search Keyword"
        onChange={(e) => setNewSong(e.target.value)}
      />
      <button id="btnsearch" onClick={() => onSearch(newSong)}>
        <BsSearch />
      </button>
    </div>
  );
}

export default Search;

//  Video videoMetaInfo: {videoMetaInfo} selectedVideoID: {selectedVideoID}

// {
//  <div>{videoMetaInfo}</div>
//       <div> {selectedVideoID}</div>
// }
