import React from "react"

export default function BookPage({ bookDescriptionPage }) {
	const bookDisplay = bookDescriptionPage.map(book => {
		return <p>{book.volumeInfo.title}</p>
	})
	return <div>{bookDisplay}</div>
}
