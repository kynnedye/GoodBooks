import React, { useContext } from "react"
import { Context } from "../context/BookContext"
import { Link, useNavigate } from "react-router-dom"

export default function Nav() {
	const navigate = useNavigate()
	const { query, setQuery, setSearch } = useContext(Context)

	let handleSubmit = e => {
		e.preventDefault()
		setSearch(query)
		navigate("/results")
		setQuery("")
	}

	return (
		<nav className="navbar navbar-light bg-light border-bottom p-5">
			<p className="navbar-brand">FindBooks📚</p>
			<Link to="/">
				<p className="navbar-text">My Library</p>
			</Link>
			<form
				onSubmit={handleSubmit}
				className="form-inline d-flex justify-content-between "
			>
				<input
					className="form-control search"
					type="search"
					placeholder="Book name.."
					aria-label="Search"
					value={query}
					onChange={e => setQuery(e.target.value)}
				/>

				<button className="btn bg-info text-white " type="submit">
					Search
				</button>
			</form>
		</nav>
	)
}
