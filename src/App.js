import React, {useState} from 'react'
import axios from 'axios'

import Search from './components/Search'


function App() {
	const [state, setState] = useState({
		s: "",
		results: [],
		selected: {}
	});
	const apiurl = 'http://www.omdbapi.com/?i=tt3896198&apikey=622d38b3';

	const search = (e) => {
		if (e.key === "Enter") {
			axios(apiurl + "&s=" + state.s).then((data) => {
				let results = data.Search;

				setState(prevState =>{
					return{ ...prevState, results: results}
				})
			});
		}
	}

	const handleInput = (e) => {
		let s = e.target.value;

		setState(prevState => {
			return {...prevState, s: s}
		});
		console.log(state.s);
	}
  return (
    <div className="App">
      <header>
        <h1>Search For Movies!</h1>
      </header>
	  <main>
		  <Search handleInput={handleInput} search={search} />
	  </main>
    </div>
  );
}

export default App;
