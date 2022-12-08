import React from 'react'
import SocialBar from '../SocialBar/SocialBar'
import './HomeSection.scss'

const HomeSection = () => {
  return (
    <>
    <div className='home-section' />    
        <div className='text-container'>
            <div className='welcome-text'>Welcome to my page!</div>
            <SocialBar />
            <div className='button-container'>
                <button id='view-projects' className='home-buttons'>View Projects</button>
                <button id='contact-me' className='home-buttons'>Contact Me</button>
            </div>
        </div>
    </>
  )
}

export default HomeSection