import React from 'react';
import ReactDOM from 'react-dom/client';
import { RootDocument } from './app/environment/system_features/rootDocument';
import {App} from './app/app';


import './index.css';

const root = ReactDOM.createRoot(RootDocument.getRoot());
root.render(<App />);

