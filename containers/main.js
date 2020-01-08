import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Card from '../components/card'
import Title from '../components/title'
import { connect } from 'react-redux'
import {
    addProduct,
    deleteProduct
} from '../actions/product'

import { getFoods } from '../api/ProductAPI';

class Main extends Component {


    componentDidMount () {

        getFoods('breakfast')
            .then((data) => {
                console.log(data);
            }).catch((err) => {
                console.log(err);
            });

    }

    render() {

        const { addProduct, deleteProduct, items } = this.props;

        return (
            <>
            <div className='container'> 
                <Title/>

                <div className="">
                    jason                        
                </div>

                <div className='row'>
                    {
                        items.map((item) => ( 
                            <Fragment key={item.id} >
                                <Card
                                    id={item.id}
                                    name={item.name}
                                    information={`
                                        ${item.calories} (cal)
                                        ${item.protein} (Protein)
                                        ${item.fat} (Fat)
                                    `}
                                    description={item.description}
                                    handleDelete={deleteProduct}
                                />
                            </Fragment>
                        ))

                    }
                </div>

                <div className="row">
                    <div>
                        <button onClick={addProduct}>確認</button>
                        <button onClick={addProduct}>重選</button>
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
const mapDispatchToProps= {addProduct, deleteProduct};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);