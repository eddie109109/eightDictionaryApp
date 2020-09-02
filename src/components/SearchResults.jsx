import React ,{useState, useEffect} from 'react';

function SearchResults(props) {
  const word = props._object;
  const [example, setExample] = useState("");


  return(
    <div className="SearchResults">
    <h3 className="wordHeading">{word.wordId}</h3>
    <li className= "wordCategory"><p>{word.wordCategory}</p></li>
    <li><p><span className= "illustration">{props._illustration}</span> {word.wordDefinition}</p></li>
    <hr/>
    </div>
  );


}

export default SearchResults;
