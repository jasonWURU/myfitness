import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Card from '../components/card'
import Dashboard from '../components/dashboard'
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
            nowDay,
            allDays,
            byDay,
            allItems,
            byItem,
            selectedProduct,
            selectedProdoctId,
            submitProduct 
        } = this.props;

        return (
            <>
            <div className='container'>

                <div className='row'>

                    <div className="col-left"> 

                        {/* 第幾天 */}
                        <h3>
                            {`Day ${byDay[nowDay].id}`} <br/>
                            {
                                `${byItem && selectedProdoctId ? byItem[selectedProdoctId].calories: 0} 卡路里`
                            }
                            {
                                `${byItem && selectedProdoctId ? byItem[selectedProdoctId].protein: 0} 蛋白質`
                            }
                        </h3>
                        {/* 選項 */}                        
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

                        <div>
                            <button onClick={()=>{}}>上一步</button>
                            <button onClick={()=>submitProduct(selectedProdoctId)}>確認</button>
                        </div>

                    </div>

                    {/* 統計 */}
                    <div className="col-right">

                        <div className="info">
                            <h3>每日紀錄</h3>
                            <Dashboard
                                items={allDays.map((key) => (byItem[byDay[key].products[0]]))}
                            />
                        </div>
  
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
                    margin: 20px auto 10px;
                }
                .row .col-left,
                .row .col-right { 
                    display: inline-block;
                    text-align: center;
                    vertical-align: top;
                }
                .row .col-left {
                    width: calc(100% / 4 * 3);
                }
                .row .col-right {
                    width: calc(100% / 4 * 1);
                    height: 100%;
                    // background-color: #f5f500;
                }
                .info {
                    // margin-top: 40px;
                    display: flex;
                    flex-direction: column;
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

const mapStateToProps = ({ user, product }) => ({...user, ...product});
const mapDispatchToProps= { fetchProductsRequest, selectedProduct, submitProduct };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);