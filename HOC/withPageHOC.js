
import React, { Component } from 'react';

import Head from 'next/head';
import Nav from '../components/nav';


const withPageHOC = (WrappedComponent) =>
  class Wrapped extends  Component {
    render() {
      return (
        <>
                    <Head>
                        <title>Fitness Calculator</title>
                        <link rel='icon' href='/favicon.ico' />
                    </Head>
                    <Nav/>
                    <WrappedComponent/>
        </>
      );
    }
  };

export default withPageHOC;