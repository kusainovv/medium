import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './app/pages/app';
import './index.css';

if (document?.getElementById('root')) {
	const content = document.getElementById('root') ?? document.body;
	const root = ReactDOM.createRoot(content);
	root.render(<App />);
}
