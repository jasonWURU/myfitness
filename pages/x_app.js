import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux'
// import { initializeStore } from '../store'
import App from 'next/app'

// const store = initializeStore(initialState);

class _App extends Component {

    render() {
        return (
            <Provider store={store}>
                <App {...props} />
            </Provider>
        );
    }
}

// _App.propTypes = {

// };

export default _App;