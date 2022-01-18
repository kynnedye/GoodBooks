import React, {useState, useEffect} from "react"
import "../App.css"
import Nav from "./Nav"
import Library from "./Library"
import SearchResults from "./SearchResults"
import {Routes, Route, useNavigate} from "react-router-dom"





export default function App(){
    const [query, setQuery] = useState("")
    const [bookSearch, setBookSearch] = useState([])
    let navigate = useNavigate()

    let url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyBTm3nxpXVcbzjgCRH-uoImiVKa951GZ9U`

    useEffect(()=>{
        const searchBooks = (e)=>{
           
            
            try{
                fetch(url)
                    .then(res => res.json())
                    .then(data =>{
                        setBookSearch(data)
                    })
    
            } catch(err){
                console.log(err)
            }
        }
        if(query){
            searchBooks()
        }

    },[query])
    
   
   


  return(
      <>
        <Nav setQuery = {setQuery} query={query} />
        <Routes>
            <Route  
                exact path="/" 
                element={<Library/>}
                />
               
            <Route  
                path="/results" 
                element={<SearchResults query={query} bookSearch={bookSearch}/>} 
                />
             
           
        </Routes>
        
        
      </>
  )
}