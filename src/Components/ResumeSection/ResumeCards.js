import './ResumeCards.scss'
import React from 'react'

const ResumeCards = ({title, company, dateStart, dateEnd, body}) => {
    
  return (
    <div className='resume-card'>
        <div className='title'>{title}</div>
        <div className='company'>{company}</div>
        <div className='date-range'>{dateStart}-{dateEnd}</div>
        <div className='body'>{body}</div>
    </div>
  )
}

export default ResumeCards