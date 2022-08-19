import React from 'react'
import ReactDOM from 'react-dom'
import { Provider} from 'react-redux';
import { configureStore } from './store.js';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import App from './App.js'

const store = configureStore();
const persister = persistStore(store)

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={<div>Loading</div>} persistor={persister}>
            <App/>
        </PersistGate>
    </Provider>,
 document.getElementById('root') );