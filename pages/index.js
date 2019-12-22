import React from 'react'
import { withRedux } from '../lib/redux'
import withPageHOC from '../HOC/withPageHOC'
import Main from '../containers/main'

const PageConfig = {}

const Home = () => (
    <>
		  <Main/>
    </>
)

export default withRedux(withPageHOC(Home, PageConfig))
