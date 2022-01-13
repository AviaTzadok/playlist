import { useContext, useEffect } from "react";

function Search({ onSearch }) {
  return (
    <div className="form">
      <input
        type="text"
        // value={newVideo}
        placeholder="Enter Search Keyword"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;

//  Video videoMetaInfo: {videoMetaInfo} selectedVideoID: {selectedVideoID}

// {
//  <div>{videoMetaInfo}</div>
//       <div> {selectedVideoID}</div>
// }
