import React from 'react'
import { withRedux } from '../lib/redux'
import withPageHOC from '../HOC/withPageHOC'
import Main from '../containers/main'
import Title from '../components/title'

const PageConfig: object = {}

const Home = () => (
    <>
        <Title/>
        <Main/>
    </>
)

export default withRedux(withPageHOC(Home, PageConfig))