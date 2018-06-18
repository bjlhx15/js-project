import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import TestContext from './TestContext';


ReactDOM.render(<TestContext/>
    , document.getElementById('root'));
registerServiceWorker();
