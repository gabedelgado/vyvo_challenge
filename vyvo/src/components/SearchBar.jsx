
const SearchBar = ({searchText, setSearchText}) => {
    // simple input element with props passed in from parent to keep them available to all components
    return (
        <div>
            <input type="text" value={searchText} onChange={(event) => setSearchText(event.target.value)} />
        </div>
    )
}

export default SearchBar