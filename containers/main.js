import React, { Component } from 'react'
import Card from '../components/card'
import Title from '../components/title'
import { connect } from 'react-redux';

class Main extends Component {
    render() {
        return (
            <>
            <div className='container'> 

                <Title/>
                {this.props.auth.name}~~~
                <div className='row'>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>

                <div className="row">
                    <div>
                        <button>新增我好懶</button>
                        <button>刪除</button>
                    </div>
                </div>

            </div>
            <style jsx>{`
                .container {
                    width: 100%;｀
                    color: #333;
                    padding-top: 55px;
                    padding-bottom: 55px;
                    background-color: #F7F7F7;
                }
                .title {
                    margin: 0;
                    width: 100%;
                    padding-top: 80px;
                    line-height: 1.15
                    font-size: 48px;
                }
                .title,
                .description {
                    text-align: center;
                }
                .row {
                    max-width: 880px;
                    margin: 80px auto 40px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                }
                button {
                    border: 0;
                    padding: 10px 16px;
                    color: #fff;
                    font-size: 20px;
                    background-color: #F78;
                    margin: 0 16px;
                }
            `}</style>
            </>
        )
    }
}

const mapStateToProps = (auth) => ({...auth});

export default connect(
    mapStateToProps
)(Main)