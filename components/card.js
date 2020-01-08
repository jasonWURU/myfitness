import React from 'react'
import PropTypes from 'prop-types'

const Card = ({
    id,
    name,
    information,
    description,
    handleDelete
}) => (
    <>
    <div className="card">
        <span className="close" onClick={()=>handleDelete(id)}>x</span>
        <h3><a href={''}>{name}</a></h3>
        <p>{information}</p>
        <p>{description}</p>
    </div>
    <style jsx>{`
        .card {
            padding: 18px 18px 24px;
            width: 220px;
            text-align: left;
            text-decoration: none;
            color: #434343;
            border: 1px solid #9b9b9b;
            position: relative;
            margin-bottom: 16px;
        }
        .card:hover {
            border-color: #067df7;
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
        .card .close {
            position: absolute;
            top: 10px;
            right: 16px;
        }
    `}</style>
    </>
)

Card.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    information: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired
};

export default Card;

