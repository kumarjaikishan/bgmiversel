import './loader.css'
import React from 'react'
import loadimg from '../../assets/loader.png'

const Loader = () => {
  return (
    <div className='loader'>
      <img src={loadimg} alt="" />
      <h2>Loading...</h2>
    </div>
  )
}

export default Loader;