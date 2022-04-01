import "./Search.css";
import { BsSearch } from "react-icons/bs";

function Search({ onSearch, newSong, setNewSong, filterPlaylist }) {
  return (
    <div className="form">
      <input
        autoFocus
        className="form-input"
        type="text"
        value={newSong}
        placeholder="Enter Search Keyword"
        onChange={(e) =>
          filterPlaylist(e.target.value, setNewSong(e.target.value))
        }
      />
      <button id="btnsearch" onClick={() => onSearch(newSong)}>
        <BsSearch />
      </button>
    </div>
  );
}

export default Search;
