import React, { useReducer, useState } from 'react'

const bookData = [
    {
        id: 1,
        bookName: "book 1"
    },
    {
        id: 2,
        bookName: "book 2"
    },
    {
        id: 3,
        bookName: "book 2"
    },
]

const ReducerExmaple = () => {

    const Reducer = (state, action)=>{
        if(action.type === "ADD"){
            const allBooks = [...state.books, action.payload]
            return {
                ...state,
                books: allBooks,
                isModalOpen: true,
                modalText: "Book Is Added"  
            }
        }if(action.type === "REMOVE"){
            const filterBook = [...state.books].filter((book)=> book.id !== action.payload)
            return{
                ...state,
                books: filterBook,
                isModalOpen: true,
                modalText: "Book Is Remove"
            }
        }
        return state
    }

    const [bookState, dispatch] = useReducer(Reducer, {
        books: bookData,
        isModalOpen: false,
        modalText: ""

    })
    const [newBook, setNewBook] = useState("")

    const bookChangeHandler =(e)=>{
       setNewBook(e.target.value)
    }

    const onBookSubmit = (e)=>{
        const allBook = {id: new Date().getTime().toString(),bookName: newBook }
        dispatch({type: "ADD", payload: allBook})
        e.preventDefault()
        setNewBook("")
    }

    const handleBookRemove = (id)=>{
        dispatch({type: "REMOVE", payload: id})
    }

    const Modal = ({modalText}) =>{
       return <p>{modalText}</p>
    }

  return (
    <div>
        <form action="" onSubmit={onBookSubmit}>
            <input type="text" name="book" id="" required onChange={bookChangeHandler} value={newBook} />
            <button type='submit'>Add</button>
        </form>

   { bookState.isModalOpen && <Modal modalText={bookState.modalText} />}

        <div>
        {bookState.books.map((book)=>{
            const {id, bookName} = book 
            return <ul key={id}>
                <li>
                {bookName}
                 <button onClick={()=>{handleBookRemove(id)}}>X</button>
                 </li>
            </ul>
        })}
        </div>
    </div>
  )
}

export default ReducerExmaple