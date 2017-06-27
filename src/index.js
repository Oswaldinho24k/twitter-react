import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../node_modules/toastr/build/toastr.css'

const WithRouter = () => (
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);

ReactDOM.render(<WithRouter />, document.getElementById('root'));
registerServiceWorker();
