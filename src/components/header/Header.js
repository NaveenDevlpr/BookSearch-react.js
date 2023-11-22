import React from 'react'
import NavBar from '../navbar/Navbar'
import SearchForm from '../searchForm/SearchForm'
import './Header.css'
const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <NavBar/>
            <div className='header-content flex-column flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>
                  Find your Book of choice
                </h2>
                <br/>
                <p className='header-text fs-18 fw-3 text-grey'>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui 
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt mollitia 
                animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis 
                est et expedita distinctio.
                </p>
                <SearchForm/>
            </div>
        </header>
    </div>
  )
}

export default Header