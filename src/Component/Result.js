import React from 'react';
const Result = ( {item, openPopup} )=>{
  return(
    <div className="result" onClick={() => openPopup(item.imdbID)}>
        <img src={item.Poster}/>
        <h3>{item.Title}</h3>
    </div>
  )
}

export default Result;