import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Card from '../components/card'
import Title from '../components/title'
import { connect } from 'react-redux'
import {
    fetchProductsRequest
} from '../actions/product'

class Main extends Component {

    // 改成 next js server side
    componentDidMount () {
        
        this.props.fetchProductsRequest('breakfast');

    }

    render() {

        const { products: { result, entities } } = this.props;

        return (
            <>
            <div className='container'>

                <Title/>
                {'DAY 1'}
                <div className='row'>
                    {
                        result.length 
                        ? ( 
                            result.map((key) => (
                                <Fragment key={key} >
                                    <Card
                                        id={entities.items[key].id}
                                        name={entities.items[key].name}
                                        information={`
                                            ${entities.items[key].calories} (cal)
                                            ${entities.items[key].protein} (Protein)
                                            ${entities.items[key].fat} (Fat)
                                        `}
                                        description={entities.items[key].description}
                                        handleDelete={()=>{}}
                                        handleSelect={''}
                                    />
                                </Fragment> 
                            ))
                        )
                        : (
                            'no data'
                        )
                    }
                </div>

                <div className="row">
                    <div>
                        <button onClick={()=>{}}>上一步</button>
                        <button onClick={()=>{}}>確認</button>
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
                    flex-wrap: wrap; 
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

Main.propTypes = {
    addProduct: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
};

const mapStateToProps = ({auth, product}) => ({...auth, ...product});
const mapDispatchToProps= {fetchProductsRequest};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);