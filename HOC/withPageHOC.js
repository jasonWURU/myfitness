
import React, { Component } from 'react';

import Head from 'next/head'
import Nav from '../components/nav'

const withPageHOC = (WrappedComponent, state, fetchDataFn) =>
    class extends Component {
        render() {
            return (
                <>
                    <Head>
                        <title>Jason Demo Web</title>
                        <link rel='icon' href='/favicon.ico' />
                    </Head>
                    <Nav/>
                    <WrappedComponent/>
                </>
            );
        }
    };

export default withPageHOC;