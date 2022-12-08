import React from 'react'
import './HomeSection.scss'

const HomeSection = () => {
  return (
    <>
    <div className='home-section' />    
        <div className='text-container'>
            <h2>Welcome to my page</h2>
            <div className='button-container'>
                <button id='view-projects' className='home-buttons'>View Projects</button>
                <button id='contact-me' className='home-buttons'>Contact Me</button>
            </div>
        </div>
    </>
  )
}

export default HomeSection