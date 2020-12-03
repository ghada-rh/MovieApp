import React from "react";
const Search =( { hundleInput,search } )=> {
  return (
    <div>
      <section className="search-box-wrap">
      <input type="text"
             className="search-box" 
             placeholder="Search for a movie" 
             onChange={hundleInput} 
             onKeyPress ={search} />
      </section>
    </div>
  );
}

export default Search;