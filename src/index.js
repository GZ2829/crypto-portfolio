import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import configureStore from './redux'
import { PersistGate } from 'redux-persist/integration/react'


const  { store, persistor } = configureStore()  


ReactDOM.render(    
<Provider store={store}>
<PersistGate loading={null} persistor={persistor}> 
    <Router> 
        <App />
    </Router>
</PersistGate>
</Provider>,
document.getElementById('root'));

