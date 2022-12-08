import './ResumeSection.scss'
import React from 'react'
import ResumeCards from './ResumeCards'

const ResumeSection = () => {
  return (
    <div className='resume-section'>
        <div className='header'>Resume</div>
        <div className='resume-cards-container'>                                                                                                                                                
        <div className='work-history-container'>
            <ResumeCards 
                title={'RPA Developer'}
                company={'VGM Group Inc.'}
                dateStart={'Dec. 2021'}
                dateEnd={'Present'}
                body={'Lorem ipsum dolar sit amet sdfhjsdkjfh sd ksdjfh sdf'}
            />
            <ResumeCards 
                title={'RPA Developer'}
                company={'VGM Group Inc.'}
                dateStart={'Dec. 2021'}
                dateEnd={'Present'}
                body={'Lorem ipsum dolar sit amet sdfhjsdkjfh sd ksdjfh sdf'}
            />
            <ResumeCards 
                title={'RPA Developer'}
                company={'VGM Group Inc.'}
                dateStart={'Dec. 2021'}
                dateEnd={'Present'}
                body={'Lorem ipsum dolar sit amet sdfhjsdkjfh sd ksdjfh sdf'}
            />
            <ResumeCards 
                title={'RPA Developer'}
                company={'VGM Group Inc.'}
                dateStart={'Dec. 2021'}
                dateEnd={'Present'}
                body={'Lorem ipsum dolar sit amet sdfhjsdkjfh sd ksdjfh sdf'}
            />
        </div>
        <div className='academic-history-container'>
        <ResumeCards 
                title={'RPA Developer'}
                company={'VGM Group Inc.'}
                dateStart={'Dec. 2021'}
                dateEnd={'Present'}
                body={'Lorem ipsum dolar sit amet sdfhjsdkjfh sd ksdjfh sdf'}
            />
            <ResumeCards 
                title={'RPA Developer'}
                company={'VGM Group Inc.'}
                dateStart={'Dec. 2021'}
                dateEnd={'Present'}
                body={'Lorem ipsum dolar sit amet sdfhjsdkjfh sd ksdjfh sdf'}
            />
            <ResumeCards 
                title={'RPA Developer'}
                company={'VGM Group Inc.'}
                dateStart={'Dec. 2021'}
                dateEnd={'Present'}
                body={'Lorem ipsum dolar sit amet sdfhjsdkjfh sd ksdjfh sdf'}
            />
        </div>
        </div>
    </div>
  )
}

export default ResumeSection