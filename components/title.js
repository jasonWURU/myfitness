import React from 'react'

const Title = () =>  (
    <>
    <h1 className='title'>NEW</h1>
    <p className='description'>
        ~~~~~~ jason ~~~~~~ 
    </p>
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
