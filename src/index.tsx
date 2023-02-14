import React from 'react';
import ReactDOM from 'react-dom/client';
import {rootDocument} from './app/environment/system_features/rootDocument';
import {App} from './app/app';

import './index.css';
import './app/features/translate/i18n.ts';
import {Provider} from 'react-redux';
import {store} from './app/store/store';

const root = ReactDOM.createRoot(rootDocument.getRoot());
root.render(<Provider store={store}>
	<App />
</Provider>);
