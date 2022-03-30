import React, { useState, useEffect } from "react"
import "../App.css"
import Nav from "./Nav"
import Library from "./Library"
import SearchResults from "./SearchResults"
import BookPage from "./BookPage"
import { Routes, Route, useNavigate } from "react-router-dom"

export default function App() {
	return (
		<>
			<Nav />
			<Routes>
				<Route exact path="/" element={<Library />} />

				<Route path="/results" element={<SearchResults />} />
				<Route path="/description" element={<BookPage />} />
			</Routes>
		</>
	)
}
