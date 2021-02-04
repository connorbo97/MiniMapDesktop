import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { App, reducers } from './src';

const store = createStore(reducers)

ReactDOM.render((
    <Provider store={store}>
        <App/>
    </Provider>
), document.getElementById('root'));

if (import.meta.hot) {
    import.meta.hot.accept()
}