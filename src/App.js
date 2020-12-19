//test mode
import React, {useState} from "react";
import "./style.css";
import axios from 'axios';
import Search from "./Component/Search";
import Results from "./Component/Results";
import Popup from './Component/Popup';
const App =()=> {
  const [state, setState] = useState({
    s:'',
    results:[],
    selected:{}
  });
  const url = "https://www.omdbapi.com/?apikey=dfe6d885"; 
  /*const getData = async =>{
    const data = await axios.get(url + "&s=" + state.s)
    console.log(data);
  }*/
  const search = (e) =>{
    if (e.key === "Enter") {
      axios(url + "&s=" + state.s).then(({ data }) => {
        let result = data.Search;
        console.log(result);   
        setState(prevState => {
          return { ...prevState, results: result }
        })
        })      
    }

  }
  const hundleInput = (e)=>{
    let name = e.target.value;
    setState(prevState =>{
      return{ ...prevState, s: name}
    });
   // console.log(state.s);
  }
  const openPopup = id => {
    axios(url + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  return (
    <div>
      <header>
        <h1>Movie App</h1>
      </header>

      <main>
        <Search hundleInput= {hundleInput} search={search}/>
        
        <Results  results = {state.results} openPopup={openPopup}/>
        
         {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>
    </div>
  );
}

export default App;