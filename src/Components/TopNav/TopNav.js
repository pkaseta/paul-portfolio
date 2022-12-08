import React from 'react'
import './TopNav.scss'

const TopNav = () => {
    const title = 'Paul Kaseta';
  return (
    <div className='top-nav'>
            <h1 className='title'>{title}</h1>
        <div className='top-nav-list'>
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Resume</h3>
            <h3>Portfolio</h3>
            <h3>Contact</h3>
        </div>
        </div>
  )
}

export default TopNav