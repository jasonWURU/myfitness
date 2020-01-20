import React from 'react'
import PropTypes from 'prop-types'

const Dashboard = ({
    items
}) => (
    <>
    <div className="dashboard">
        <div className="subtitle">
            總共:&nbsp;
            {`${items.reduce((accumulator, item)=>(+accumulator + +item.calories), 0)}k 卡路里`}&nbsp;
            {`${items.reduce((accumulator, item)=>(+accumulator + +item.fat), 0)}g 脂肪`}&nbsp;
            {`${items.reduce((accumulator, item)=>(+accumulator + +item.protein), 0)}g 蛋白`}
        </div>
        <div className="content">
            {
                items.map((item, key)=>(
                    <div key={`${key}`}>
                        <span className="rowTitle">第{ key+1 }天</span> {item && item.name}
                    </div>
                ))
            }
        </div>

    </div>
    <style jsx>{`
        .dashboard {
            display: inline-block;
            border: 1px solid #f7f7f7;
            text-align: left;
        }
        .dashboard .content {
            min-height: 200p
        }
        .subtitle{
            margin-bottom: 8px;
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
    items:PropTypes.array.isRequired
};

export default Dashboard;

