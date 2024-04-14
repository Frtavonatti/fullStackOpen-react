function Search({newSearch, handleSearchInputChange}) {
  return (
    <div>
        <h3>Search in your existent contacts</h3>
        <input value={newSearch} onChange={handleSearchInputChange}  type="input" />
    </div>
  )
}

export { Search }
