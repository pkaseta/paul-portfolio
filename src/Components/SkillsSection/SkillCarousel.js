import './SkillCarousel.scss'
import React from 'react'
import { SkillsData } from '../../Data/SkillsData'

const SkillCarousel = () => {
  return (
    <>
        <div className='header'>Skills</div>
    <div id='skills-section'>
        {
          SkillsData.map(skill => (
        <div className='web-skills'>
          <span className='title'>{skill.name}</span>
          <span className='percentage' style={{marginRight: (100 - skill.percentageSkilled) + '%'}}>{skill.percentageSkilled}%</span>
          <div className='progress-bar'>
            <div className='progress' style={{width: skill.percentageSkilled +'%'}}/>
          </div>
        </div>
          ))
        }
    </div>
    </>
  )
}

export default SkillCarousel