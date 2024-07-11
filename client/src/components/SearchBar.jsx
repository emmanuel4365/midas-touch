import { MdSearch } from "react-icons/md";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="search"
        name="search-term"
        id="search-term"
        className="search-term"
      />
      <MdSearch size={24} />
    </div>
  );
};
export default SearchBar;
