import React from 'react';
import App from '../Vote/App';
import PollList from '../Vote/Pages/PollList';
import SinglePoll from '../Vote/Pages/SinglePoll';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

Router.prototype.componentWillReceiveProps = function (nextProps) {
    let components = [];

    function grabComponents(element) {
        // This only works for JSX routes, adjust accordingly for plain JS config
        if (element.props && element.props.component) {
            components.push(element.props.component);
        }
        if (element.props && element.props.children) {
            React.Children.forEach(element.props.children, grabComponents);
        }
    }

    grabComponents(nextProps.routes || nextProps.children);
    components.forEach(React.createElement); // force patching
};
export default (
    <Router history={browserHistory}>
        <Route path="/" components={App}>
            <Route path="/pollDetail" components={SinglePoll}/>
            <IndexRoute components={PollList}/>
        </Route>
    </Router>
);