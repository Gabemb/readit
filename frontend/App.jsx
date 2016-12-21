import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Router, Route, IndexRoute, browserHistory} from 'react-router'

const App = (props) => {
	return (
		<div>
			Hello World
			{props.children}
		</div>
	)
};

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path='/' component={App}>
		</Route>
	</Router>,
	document.getElementById('root')
)
			//<IndexRoute component={} />