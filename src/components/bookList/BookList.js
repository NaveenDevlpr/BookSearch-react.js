import React from 'react'
import Loader from '../loader/Loader'
import { useGlobalContext } from '../../content'
import coverImage from '../../images/cover.jpeg'
import Book from '../bookList/Book'
import './BookList.css'
const BookList = () => {

  const {books,loading,resultTitle}=useGlobalContext();
  const BooksWithCover=books.map((e)=>{
    return{
      ...e,
      id:(e.id).replace("/works/",""),
      cover_img:e.cover_id?`https://covers.openlibrary.org/b/id/${e.cover_id}-L.jpg`:coverImage
    }
  })
 if(loading) return <Loader/>
  return (
    <section className='bookList'>
        <div className='container'>
            <div className='section-title'>
                <h2>{resultTitle}</h2>
            </div>
            <div className='bookList-content grid'>
              {
                BooksWithCover.slice(0,30).map((item,index)=>{
                  return(
                    <Book key={index} {...item}/>
                  )
                })
              }
            </div>
        </div>
    </section>
  )
}

export default BookList