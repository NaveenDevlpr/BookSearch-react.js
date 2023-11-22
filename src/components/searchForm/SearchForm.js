import React ,{useRef,useEffect}from 'react'
import {FaSearch} from 'react-icons/fa'
import  {useNavigate} from 'react-router-dom'
import './SearchForm.css'
import { useGlobalContext } from '../../content'
const SearchForm = () => {
  const {setSearchBook,setresultTitle}=useGlobalContext();
  const searchref=useRef('')
  const navigate=useNavigate()

  useEffect(() => {
    searchref.current.focus()
  }, [])

  const handleSubmit=(e)=>{
    e.preventDefault()
    let tempSearchText=searchref.current.value.trim()
    if((tempSearchText.replace("","")).length===0){
      setSearchBook('Ice and Fire')
      setresultTitle('Please Enter Something')
    }
    else{
      setSearchBook(searchref.current.value)
    }
  }

 


  return (
    <div className='search-form'>
        <div className='container'>
            <div className='search-form'>
              <form className='search-form' onSubmit={(e)=>handleSubmit(e)}>
                <div className='search-form-elem flex flex-sb bg-white'>
                  <input type='text' className='form-content form-control' placeholder='Ice and Fire...' ref={searchref}/>
                  <button type='submit' className='flex flex-c' onClick={(e)=>handleSubmit(e)}>
                      <FaSearch className='text-purple' size={32}/>
                  </button>
                </div>
              </form>
            </div>
        </div>
    </div>
  )
}

export default SearchForm