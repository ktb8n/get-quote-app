import { useState } from 'react';
import axios from 'axios';
import "./App.css";

function App() {
  const [quote, setQuote] = useState('')
  const [byline, setByline] = useState('')


  const getQuote = () => {
    axios.get('https://api.quotable.io/random')
    .then(res => {
      //successful response code:
      setQuote(res.data.content)
      setByline(res.data.author)
    }).catch(err => {
      //unsuccesful response code:
      console.log(err)
    })
  }
  return (
		<div className='App'>
				<button onClick={getQuote}>Get Quote</button>
				{quote ? <p>"{quote}"</p> : null}
				{byline ? <p className='byline'>-{byline} </p> : null}
		</div>
	);
}

export default App;
