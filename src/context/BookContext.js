import React, {useState, useEffect} from "react"
import useLocalStorage from "../hooks/useLocalStorage"

const Context = React.createContext()

function ContextProvider({children}){
    const [query, setQuery] = useState("")
    const [search, setSearch] = useLocalStorage("search", "")
    const [bookSearch, setBookSearch] = useLocalStorage("results",[])
    const [descriptionPage, setDescriptionPage] = useLocalStorage("page",[])
    const [bookLibrary, setBookLibrary] = useLocalStorage("library",[])
    const [bookRead, setBookRead] = useLocalStorage("read",0)
    const [numberOfBooks, setNumberOfBooks] = useLocalStorage("goal", 0)
    const [savedGoal, setSavedGoal] = useLocalStorage("reading",0)
    const [goalSet, setGoalSet] = useLocalStorage(false)

   
   

    let url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBTm3nxpXVcbzjgCRH-uoImiVKa951GZ9U`

    useEffect(()=>{
        const searchBooks = ()=>{
            try{
            
              
                 fetch(url)
                     .then(res => res.json())
                     .then(data => setBookSearch(data?.items || []))
                 
                
             
             
            }catch(err){
            console.log(err)
            }
        }
      
      searchBooks()
      
        

    },[search])

// displays a read badge on the top of the book
 const displayRead = (id) =>{
        let readArr = bookLibrary.map(book =>{
          if(book.id === id){
            return {...book, isRead:true}
          }
          return book
        })
        setBookLibrary(readArr)
        if(savedGoal > 0){
          setBookRead(prev => prev + 1)
        }
       
}
// turn the read badge off on the top of the book
  const notRead = (id) => {
    let notReadArr = bookLibrary.map(book =>{
      if(book.id === id){
        return {...book,isRead:false}
      }
      return book
    })
    setBookLibrary(notReadArr)
    if(savedGoal > 0 && bookRead > 0){
      setBookRead(prev => prev - 1)
    }
  }


// remove book from library

const removeBook = (id) =>{
  setBookLibrary(prevBooks => prevBooks.filter(item => item.id !== id))
  if(bookRead > 0){
    setBookRead(prev => prev - 1)
  }      
}
    
   



    return(
       < Context.Provider value={{
           query,
           setQuery,
           search,
           setSearch,
           bookSearch,
           setBookSearch,
           descriptionPage,
           setDescriptionPage,
           bookLibrary,
           setBookLibrary,
           bookRead,
           setBookRead,
           displayRead,
           removeBook,
           setSavedGoal,
           savedGoal,
           numberOfBooks,
           setNumberOfBooks,
           notRead,
           goalSet,
           setGoalSet
           
       }} >
            {children}
       </Context.Provider>
    )
}

export {Context, ContextProvider}