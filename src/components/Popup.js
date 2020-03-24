import React from 'react'

function Popup({ selected, closePopup}) {
	return (
		<section className="Popup">
			<div className="content">
				<h2> {selected.Title}  <span> ({ selected.Year }) </span></h2>
				<p className="rating">Rating: {selected.imdbRating}</p>
			</div>
			<div className="plot">
				<img alt={selected.Poster} src={selected.Poster} />
			</div>
			<button className="close" onClick={closePopup}>Close</button>
		</section>
	)
}
export default Popup