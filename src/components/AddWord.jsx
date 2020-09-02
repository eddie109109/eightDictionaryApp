import React ,{useState, useEffect} from 'react';

import Logo from "../img/logo.png";
import SearchButton from "../img/search.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function AddWord(props) {

  const [userInput, setUserInput] = useState("");
  function handleInput(e) {
    const userInput = e.target.value;

    setUserInput(userInput);

  }

  function handleClick(e) {
    e.preventDefault(); // stop the browser from refreshing
    if (userInput === "") { // if the user enters nothing, just return
      return;
    }

    props._setInputs((pre) => {
      return [...pre, userInput];
    })// use the setInputs function from the App to add the word to the history array
    props._handleResult(userInput); // use the handleResult function from the app to pass the result back
    setUserInput("");
  }

  return (
    <div className="AddWord">
      <a href="#" ><img className="logoImage" src={Logo} alt="logo"/></a>
      <form className = "searchForm">
        <div className = "searchInputContainer">
        <input onChange={handleInput} className = "searchInput" type="text" placeholder="Enter a word..."/>
        <button onClick={handleClick} className = "submitButton"><FontAwesomeIcon icon={faSearch} size="lg" /></button>
        </div>
      </form>
    </div>
  );
}

export default AddWord;
