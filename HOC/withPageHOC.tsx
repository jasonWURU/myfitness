
import React, { Component } from 'react';

import Head from 'next/head';
import Nav from '../components/nav';

// eslint-disable-next-line react/prefer-stateless-function
const withPageHOC = (WrappedComponent: React.ComponentType) => class Wrapped extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Fitness Calculator</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <WrappedComponent />
      </>
    );
  }
};

export default withPageHOC;
