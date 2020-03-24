import React from 'react'
import Results from './Results'

function Result({ result, openPopup }) {
	return (
		<div className="result" onClick= {() => openPopup(result.imdbID)}>
			<img alt="test" src={result.Poster} />
			<h3>{result.Title}</h3>

		</div>

	)
}
export default Result