import "./SearchBox.scss";

export default function Search({ handleInputChange, handleSubmitSearch }) {
  return (
    <div className="search">
      <input
        type="text"
        onChange={handleInputChange}
        onKeyUp={handleSubmitSearch}
        className="search__input"
        name="searchInput"
        placeholder="search..."
      ></input>
    </div>
  );
}

// MARGA

// import "./SearchBox.scss";
// export default function Search({ handleInputChange, handleSubmitSearch }) {
//   return (
//     <div className="search">
//       <input
//         type="text"
//         onChange={handleInputChange}
//         onKeyDown={handleSubmitSearch}
//         className="search__input"
//         name="searchInput"
//         placeholder="search..."
//       ></input>
//     </div>
//   );
// }
