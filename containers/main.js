import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Card from '../components/card'
import Title from '../components/title'
import { connect } from 'react-redux'
import {
    fetchProductsRequest,
    selectedProduct,
    submitProduct
} from '../actions/product'

class Main extends Component {

    // 改成 next js server side
    componentDidMount () {
        
        this.props.fetchProductsRequest('breakfast');

    }

    render() {

        const {  
            allItems,
            byItem,
            selectedProduct,
            selectedProdoctId,
            submitProduct 
        } = this.props;

        return (
            <>
            <div className='container'>

                <Title/>
                {'DAY 1'}
                <div className='row'>
                    {
                        allItems.length 
                        ? ( 
                            allItems.map((key) => (
                                <Fragment key={key} >
                                    <Card
                                        id={byItem[key].id}
                                        name={byItem[key].name}
                                        information={`
                                            ${byItem[key].calories} (cal)
                                            ${byItem[key].protein} (Protein)
                                            ${byItem[key].fat} (Fat)
                                        `}
                                        description={byItem[key].description}
                                        handleSelected={selectedProduct}
                                        selected={selectedProdoctId === byItem[key].id}
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
                        <button onClick={()=>submitProduct(selectedProdoctId)}>確認</button>
                    </div>
                </div>

                {
                   `${byItem && selectedProdoctId ? byItem[selectedProdoctId].calories: 0} 卡路里`
                }
                {
                   `${byItem && selectedProdoctId ? byItem[selectedProdoctId].protein: 0} 蛋白質`
                }
                <div>
                    每日紀錄
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
    selectedProduct: PropTypes.func.isRequired,
    fetchProductsRequest: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth, product }) => ({...auth, ...product});
const mapDispatchToProps= { fetchProductsRequest, selectedProduct, submitProduct };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);