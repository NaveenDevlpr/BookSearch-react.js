import React from 'react'
import './Loader.css'
import loader from '../../images/loader.png'

const Loader = () => {
  return (
    <div className='loader flex flex-c'>
        <img src={loader} alt=''/>
    </div>
  )
}

export default Loader