import React, { Component } from 'react';
import withPageHOC from '../HOC/withPageHOC';
import { withRedux } from '../lib/redux';

import Dashboard from '../components/dashboard';

class About extends Component {
  render() {
    const {
      allDays,
      byDay,
      byItem,
    } = this.props;

    return (
      <>
        THIS IS ABOUT
        <Dashboard
          items={allDays.map((key) => (byItem[byDay[key].products[0]])).filter((item) => (!!item))}
        />
      </>
    );
  }
}

const mapStateToProps = ({ user, product }) => ({ ...user, ...product });

export default withRedux((withPageHOC(About)), {});
