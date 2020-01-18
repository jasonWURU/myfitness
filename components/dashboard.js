import React from 'react'
import PropTypes from 'prop-types'

const Dashboard = ({
    items
}) => (
    <>
    <div className="dashboard">
        {
            items.map((item, key)=>(
                <div key={`${key}`}>
                    <span className="rowTitle">第{ key+1 }天</span> {item && item.name}
                </div>
            ))
        }
    </div>
    <style jsx>{`
        .dashboard {
            display: inline-block;
            border: 1px solid #f7f7f7;
            text-align: left;
        }
        .rowTitle {
            min-width: 150px;
            display: inline-block;
            text-align: left;
        }
    `}</style>
    </>
)

Dashboard.propTypes = {
   
};

export default Dashboard;

