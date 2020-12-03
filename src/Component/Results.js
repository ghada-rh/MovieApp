import React from 'react';
import Result from './Result';

const Results = ( {results, openPopup} )=>{
  return(
    <section className="results">
        {results.map(item=>(
           <Result key={item.imdbID} item ={item} openPopup={openPopup}/>
        ))} 
    </section>
  )
}

export default Results;