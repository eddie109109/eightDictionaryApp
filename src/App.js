import React ,{useState, useEffect} from 'react';
import Body from "./components/Body";
import Footer from "./components/Footer";
import AddWord from "./components/AddWord";
import Word from "./components/Word";
import ShowTime from "./components/ShowTime";
import SearchResults from "./components/SearchResults";
// import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";

const API_KEY = "4590827c-8fef-4c8f-814a-6dcc75ca8247";

function App() {
  const [inputs, setInputs] = useState([]);
  const [error, setError] = useState("");
  const [results, setResults] = useState("");
  const [objectArray,setObjectArray] = useState([]);
  const illustration = "Meaning:";
  const [isLoading, setIsLoading] = useState(false);
  async function handleResult(inputResult) {

  const DICTIONARY_URL = `https://dictionaryapi.com/api/v3/references/learners/json/${inputResult}?key=${API_KEY}`;

    // console.log("here", DICTIONARY_API);
    try {
      setObjectArray([]);
      setError("");
      setIsLoading(true);
      const response = await axios.get(DICTIONARY_URL).then(res => {
        console.log("--------------second part------");
        var lengthOfTotalArray = res.data.length;
        console.log(lengthOfTotalArray);
        if (lengthOfTotalArray === 0) {
          setError(`Sorry, there are no results for "${inputResult}"`);
        }

        for (var i = 0; i < lengthOfTotalArray; i ++) {
          var object = {
            wordId: "",
            wordCategory: "",
            wordDefinition: ""
          }
          var id = res.data[i].meta.id;
          var category = res.data[i].fl;
          var definition = res.data[i].shortdef[0];
          object.wordId = id;
          object.wordCategory = category;
          object.wordDefinition = definition;
          console.log("pushing");
          setObjectArray((pre) => {
            return [...pre,object];
          })
        }
        setIsLoading(false);
      });

      // console.log(response);
    } catch (err) {
  
      setError(`Sorry, there are no results for "${inputResult}"`);
      // console.log("now error is", error);
      setIsLoading(false);
    }

  }
  //
  useEffect(()=>{
    if (localStorage.getItem("exampleWordData")) {
      setObjectArray(JSON.parse(localStorage.getItem("exampleWordData")));
    }
  },[]);

  useEffect(()=>{ // use web browser to store data, cookie
    localStorage.setItem("exampleWordData",JSON.stringify(objectArray))
  },[objectArray]);

  return (
    <div className="App">
      <div className="contentBody">

      <AddWord _setInputs={setInputs} _handleResult={handleResult}/>
        <ul>
        {objectArray.map((object,index) => <SearchResults errorMessage = {error}  _object = {object} id = {index} key={index} _illustration={illustration}/>)}
        </ul>
        <h2 className="errorStyle">{error!= null? error: null}</h2>
      </div>

      <ShowTime />
      <Footer />
    </div>
  );
}

export default App;
