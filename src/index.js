import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

let root = ReactDOM.createRoot(
	document.getElementById('root')
  	);

let app = <React.StrictMode>
				<Router>
					<App />
				</Router>        
			</React.StrictMode>

root.render(app);