import React from 'react'

const Title = () =>  (
    <>
    <h1 className='title'>熱量紀錄</h1>
    <p className='description'>How many calories do i eat per week</p>
    <style jsx>{`
        .title {
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
        }
        .title,
        .description {
            text-align: center;
        }
    `}</style>
    </>
)

export default Title
