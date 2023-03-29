import React from 'react';

interface SearchBarType {
  handleChange: React.ChangeEventHandler
}

function SearchBar({handleChange}: SearchBarType) {
  return (
    <div>
      <input
        type="text"
        className='rounded-full border px-5 py-2 mx-1 my-auto rounded-full hover:bg-gray-dark hover:text-neutral text-xl'
        id="simple-search"
        placeholder='Search by name...'
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default SearchBar;
