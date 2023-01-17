import React, {useState} from "react";

function SearchBar(){

   const [searchInput, setSearchInput] = useState()

   function handleSearchChange(e){

    setSearchInput(e.target.value)
    console.log(searchInput)
   }


    return (
        <div>
        
        <input type="text" placeholder="Search Here"  onChange={handleSearchChange} value={searchInput} />
         <button onClick={FilterSearch}>Search</button>
        </div>
    )

}

export default SearchBar