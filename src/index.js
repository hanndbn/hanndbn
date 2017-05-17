import React from 'react';
import ReactDOM from 'react-dom';
import routes from './router';
import './theme/globalStyle';
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
    module.hot.accept('./router', () => {
        const routes = require('./router').default;
        render(routes)
    });
}
