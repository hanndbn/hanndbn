import React from 'react';
import ReactDOM from 'react-dom';
import routes from './containers/Vote/router';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './theme/globalStyle';
import './index.css';
import {AppContainer} from 'react-hot-loader';
const render = (routes) => {
    ReactDOM.render(
        <AppContainer>
            {routes}
        </AppContainer>,
        document.getElementById('root')
    )
};

render(routes);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./containers/Vote/router', () => {
        const routes = require('./containers/Vote/router').default;
        render(routes)
    });
}
