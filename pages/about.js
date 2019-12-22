import React, { Component } from 'react';
import withPageHOC from '../HOC/withPageHOC'

class About extends Component {
    render() {
        return (
            <div>
                THIS IS ABOUT
            </div>
        );
    }
}

export default withPageHOC(About);