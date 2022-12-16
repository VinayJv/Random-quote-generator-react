import './App.css';
import {useState} from "react";


function App() {
  const [getQuote, setQuote] = useState("If a man cries, he is not weak,he just has been strong for too long.");
  const [getAuthor, setAuthor] = useState("Itachi Uchiha");
  const [getCounter, setCounter] = useState(0);
  function generateRandomQuote(){
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      setQuote(data[getCounter].text);
      setAuthor(data[getCounter].author);
    }).catch(err => { console.log(err)});
    setCounter(Math.floor(Math.random() * (1643 - 1) + 1));
  }
  return (
    <div id="quote-box">
      <p id="text"><span id="quotation">"</span>{getQuote}<span id="quotation">"</span></p>
      <p id="author">{"- "+getAuthor}</p>
      <a id="twitter" rel="noreferrer" target="_blank" href="twitter.com/intent/tweet"><img src="https://cdn-user-icons.flaticon.com/87980/87980930/1671103211383.svg?token=exp=1671104151~hmac=3c929932fa5944f52454ad338d491287" width="45px" height="45px" alt="tweet_quote"></img></a>
      <a id="tumblr" rel="noreferrer" target="_blank" href="https://www.tumblr.com/login"><img src="https://cdn-user-icons.flaticon.com/87980/87980930/1671103339831.svg?token=exp=1671104255~hmac=41425c43ec131d79d798ecf922007a8c" width="45px" height="45px" alt="tumblr_quote"></img></a>
      <button id="new-quote" onClick={generateRandomQuote}>Next Quote</button> 
    </div>
  );
}

export default App;
