import React from 'react'
import Results from './Results'

function Result({ result }) {
	return (
		<div className="result">
			<img src={Result.Poster} />
			<h3>{result.Title}</h3>

		</div>

	)
}
export default Result