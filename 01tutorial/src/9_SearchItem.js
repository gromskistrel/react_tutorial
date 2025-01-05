import React from 'react'

const SearchItem = ({search, setSearch}) => {
  return (
    // so if someone presses enter it wont reload
    <form className='searchForm' onSubmit = {(e) => e.preventDefault()}>
        {/* htmlFor is basically an id of the label (so it can be read by screen readers)
        and be focused at the correct time (when clicking on it) */}
        <label htmlFor='search'>Search</label>
        <input
            id='search'
            type='text'
            role='searchbox'
            placeholder='Search Items'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItem
