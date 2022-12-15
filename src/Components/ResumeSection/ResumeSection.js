import './ResumeSection.scss'
import React from 'react'
import ResumeCards from './ResumeCards'
import { WorkData } from '../../Data/WorkData'
import { EducationData } from '../../Data/EducationData'

const ResumeSection = () => {
  return (
    <div id='resume-section'>
        <div className='header'>Resume</div>
        <div className='resume-cards-container'>                                                                                                                                                
        <div className='work-history-container'>
            {WorkData.map(job => 
                (<ResumeCards 
                    title={job.title}
                company={job.company}
                dateStart={job.startDate}
                dateEnd={job.endDate}
                body={job.description}
                />)
            )}
        </div>
        <div className='academic-history-container'>
        {EducationData.map(school => 
                (<ResumeCards 
                title={school.degree}
                company={school.institution}
                dateStart={school.startDate}
                dateEnd={school.endDate}
                body={school.description}
                />)
            )}
        </div>
        </div>
    </div>
  )
}

export default ResumeSection