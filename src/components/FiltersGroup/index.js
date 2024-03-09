import './index.css'

const FiltersGroup = props => {
  const {
    searchInput,
    onChangeSearch,
    categoryOptions,
    ratingsList,
    filterByCategory,
    filterByRating,
    filterBySearch,
    clearFilters,
  } = props

  const onClickCategory = event => {
    filterByCategory(event.target.id)
  }

  const onClickRating = event => {
    filterByRating(event.target.id)
  }

  const onChangeSearchInput = event => {
    onChangeSearch(event.target.value)
  }

  const onEnter = event => {
    if (event.key === 'Enter') {
      filterBySearch(event.target.value)
    }
  }

  const onClickClear = () => {
    clearFilters()
  }

  return (
    <div className="filters-group-container">
      <h1>Filters Group</h1>
      <input
        type="search"
        value={searchInput}
        onChange={onChangeSearchInput}
        onKeyDown={onEnter}
      />
      <h1>Category</h1>
      {categoryOptions.map(each => (
        <p id={each.categoryId} onClick={onClickCategory}>
          {each.name}
        </p>
      ))}
      <h1>Rating</h1>
      {ratingsList.map(each => (
        <img
          id={each.ratingId}
          onClick={onClickRating}
          src={each.imageUrl}
          alt={`rating ${each.ratingId}`}
        />
      ))}
      <button type="button" onClick={onClickClear}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
