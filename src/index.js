import React from 'react';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
function AppWithCallbackAfterRender() {
        return (<Provider store={store}>
                <App tab="home" />
                </Provider>)
}
root.render(<AppWithCallbackAfterRender />);