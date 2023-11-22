import React from 'react'
import Header from '../../components/header/Header'
import {Outlet} from 'react-router-dom'
import BookList from '../../components/bookList/BookList'
const Home = () => {
  return (
    <main>
         <Header/>
         <BookList/>
         <Outlet/>
    </main>
  )
}

export default Home