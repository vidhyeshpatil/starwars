import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './css/pageCss.css';
import LoginScreen from './components/LoginScreen';
import SearchScreen from './components/SearchScreen';
import registerServiceWorker from './registerServiceWorker';

const App = () => {
	return 	<BrowserRouter>
				<Switch>
					<Route exact path = '/' component = {LoginScreen} />
					<Route path = '/searchScreen' component = {SearchScreen} />
				</Switch>
			</BrowserRouter>
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
