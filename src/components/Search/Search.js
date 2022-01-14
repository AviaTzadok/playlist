import { useContext, useEffect } from "react";

function Search({ onSearch, newSong, setNewSong }) {
  return (
    <div className="form">
      <input
        type="text"
        value={newSong}
        placeholder="Enter Search Keyword"
        onChange={(e) => setNewSong(e.target.value)}
      />
      <button onClick={() => onSearch(newSong)}>search</button>
    </div>
  );
}

export default Search;

//  Video videoMetaInfo: {videoMetaInfo} selectedVideoID: {selectedVideoID}

// {
//  <div>{videoMetaInfo}</div>
//       <div> {selectedVideoID}</div>
// }
