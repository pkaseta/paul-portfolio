import './AboutSection.scss'
import React from 'react'
import AboutPhoto from '../../Assets/about-me-photo.jpg'

const AboutSection = () => {
  return (
    <div id='about-section'>
        <div className='header'>About Me</div>
        <div className='feature-container'>
            <div className='image-container'>
                <img id='about-image' src={AboutPhoto} alt='Paul K'/>
            </div>
            <div className='details-container'>
                <div className='title'>Paul V Kaseta Jr</div>
                <div className='role'>Software Developer</div>
                <div className='body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Etiam nulla metus, sodales sit amet ligula eget, euismod sollicitudin ipsum.
                     Etiam gravida orci ut tristique luctus. Phasellus porta ullamcorper semper.
                     Nunc ut dictum ipsum. Vivamus eu volutpat nisi. Nunc massa tellus.</div>
                <button onClick={() => document.getElementById('resume-section').scrollIntoView()}>See My Resume</button>
            </div>
        </div>
    </div>
  )
}

export default AboutSection