import React from 'react'
import PropTypes from 'prop-types'

const Card = ({
    id,
    name,
    information,
    description,
    selected,
    handleSelected
}) => (
    <>
    <div 
        className={`card ${selected ? 'actived': ''}`} 
        onClick={()=>handleSelected(id)}
    >
        <h3><a href={''}>{name}</a></h3>
        <p>{information}</p>
        <p>{description}</p>
    </div>
    <style jsx>{`
        .card {
            padding: 16px;
            width: 180px;
            min-height: 200px;
            display: inline-block;
            text-align: left;
            text-decoration: none;
            color: #434343;
            border: 1px solid #9b9b9b;
            position: relative;
            margin-bottom: 16px;
            vertical-align: top;
        }
        .card:hover {
            border-color: #96D7FF;
        }
        .card.actived {
            background-color: #96D7FF;
        }
        .card.actived h3 a{
            color: #B38546;
        }
        .card h3 {
            margin: 0;
            color: #067df7;
            font-size: 18px;
        }
        .card h3 a{
            color: #067df7;
            text-decoration: none;
        }
        .card p {
            margin: 0;
            padding: 12px 0 0;
            font-size: 13px;
            color: #333;
        }
        .card + .card {
            margin-left: 32px;
        }
    `}</style>
    </>
)

Card.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    information: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    handleSelected: PropTypes.func.isRequired
};

export default Card;

