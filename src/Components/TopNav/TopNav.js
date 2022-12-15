import React from 'react'
import './TopNav.scss'

const TopNav = () => {
    const title = 'Paul Kaseta';

    const handleClick = event => {
      const parentElement = document.querySelector('.top-nav-list');
      let elements = parentElement.querySelectorAll('a');
      console.log(elements)
      elements.forEach(element => {
        if(element.classList.contains('selected')){
          element.classList.remove('selected')
        }
      })
      event.currentTarget.classList.add('selected')
    }

  return (
    <div className='top-nav'>
            <h1 className='title'>{title}</h1>
        <div className='top-nav-list'>
            <a onClick={handleClick} href='#root'><h3>Home</h3></a>
            <a onClick={handleClick} href='#about-section'><h3>About</h3></a>
            <a onClick={handleClick} href='#resume-section'><h3>Resume</h3></a>
            <a onClick={handleClick} href='#skills-section'><h3>Skills</h3></a>
            <a onClick={handleClick} href='#projects-section'><h3>Projects</h3></a>
            <a onClick={handleClick} href='.home-section'><h3>Contact</h3></a>
        </div>
        </div>
  )
}

export default TopNav