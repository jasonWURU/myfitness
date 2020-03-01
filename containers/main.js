import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../components/card';
import Dashboard from '../components/dashboard';
import Roller from '../components/roller';
import {
  fetchProductsRequest,
  selectedProduct,
  unSubmitProduct,
  submitProduct,
} from '../actions/product';

// export interface MainProps {
//   nowDay?: any;
//   allDays: Array<number>;
//   allItems: Array<number>;
//   byDay?: any;
//   byItem?: any;
//   fetchProductsRequest?: any;
//   selectedProduct: () => void;
//   selectedProductId?: number;
//   unSubmitProduct?: any;
//   submitProduct?: any;
// }

// class Main extends Component<MainProps, {}> {
class Main extends Component {

  // static propTypes = {
  //   selectedProduct: PropTypes.func.isRequired,
  //   fetchProductsRequest: PropTypes.func.isRequired,
  //   nowDay: PropTypes.string.isRequired,
  //   allDays: PropTypes.array.isRequired,
  //   allItems: PropTypes.array.isRequired,
  //   byDay: PropTypes.shape({
  //     id: PropTypes.string.isRequired,
  //     name: PropTypes.string.isRequired,
  //   }).isRequired,
  //   byItem: PropTypes.shape({
  //     calories: PropTypes.string.isRequired,
  //     protein: PropTypes.string.isRequired,
  //     fat: PropTypes.string.isRequired,
  //   }).isRequired,
  // };

  componentDidMount() {
    // 取得商品
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
      selectedProductId,
      unSubmitProduct,
      submitProduct,
    } = this.props;

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-left">

              {/* 標題 */}
              <h3>
                {`Day ${byDay[nowDay].id} ${byDay[nowDay].name}`}
                {' '}
                <br />
              </h3>

              {/* 產品資訊 */}
              <div className="subtitle">
                {`${selectedProductId ? byItem[selectedProductId].calories : 0}k 卡路里`}
                {`${selectedProductId ? byItem[selectedProductId].protein : 0}g 蛋白`}
              </div>

              <div className="content">
                {
                    allItems.length
                      ? (
                        /* 選項 */
                        allItems.map((key) => (
                          <Fragment key={key}>
                            <Card
                              id={byItem[key].id}
                              name={byItem[key].name}
                              information={`
                                        ${byItem[key].calories}k 卡路里
                                        ${byItem[key].protein}g 蛋白
                                        ${byItem[key].fat}g 脂肪
                                    `}
                              description={byItem[key].description}
                              handleSelected={selectedProduct}
                              selected={selectedProductId === byItem[key].id}
                            />
                          </Fragment>
                        ))
                      )
                    /* 載入中 */
                    : <Roller />
                }
              </div>

              <div>
                {/* 上一步 */}
                <button onClick={unSubmitProduct}>上一步</button>
                {/* 送出 */}
                <button
                  onClick={selectedProductId ? () => submitProduct(selectedProductId) : () => { alert('還沒選'); }}
                >
                  確認
                </button>
              </div>

            </div>

            {/* 統計 */}
            <div className="col-right">

              <div className="info">
                <h3>每日紀錄</h3>
                <Dashboard
                  items={allDays.map((key) => (byItem[byDay[key].products[0]])).filter((item) => (!!item))}
                />
              </div>

            </div>

          </div>

        </div>
        <style jsx>
          {`
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
                .subtitle {
                    margin-bottom: 8px;
                }
                .row {
                    margin: 20px auto 10px;
                }
                .row .col-left,
                .row .col-right { 
                    display: inline-block;
                    vertical-align: top;
                }
                .row .col-left {
                    text-align: center;
                    width: calc(100% / 4 * 3);
                }
                .row h3{
                    margin-top: 8px;
                    margin-bottom: 8px;
                }
                .row .content{
                    min-height: 260px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .row .col-right {
                    width: calc(100% / 4 * 1);
                    height: 100%;

                }
                .info {
                    display: flex;
                    flex-direction: column;
                }
                button {
                    border: 0;
                    padding: 10px 16px;
                    color: #fff;
                    font-size: 20px;
                    background-color: #3498db;
                    margin: 0 16px;
                }
            `}
        </style>
      </>
    );
  }
}

// do to
// type ConnectedStateProps = Pick<MainProps,
//   "nowDay"|
//   "allDays"|
//   "byDay"|
//   "allItems"|
//   "byItem"|
//   "selectedProduct"|
//   "selectedProductId"|
//   "unSubmitProduct"|
//   "submitProduct"
// >

// interface StateProps {
//   user: any;
//   product: any
// }

// const mapStateToProps = ({ user, product }: StateProps) =>  ({
const mapStateToProps = ({ user, product }) =>  ({
  /* 這裡 return 的內容將可以在 this.props 中使用 */
    nowDay: user.nowDay,
    byDay: user.byDay,
    allDays: user.allDays,
    allItems: product.allItems,
    byItem: product.byItem,
})

const mapDispatchToProps = {
  fetchProductsRequest,
  selectedProduct,
  submitProduct,
  unSubmitProduct
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
