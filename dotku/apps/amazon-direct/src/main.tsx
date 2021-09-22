import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import App from './app/app';
import {
  HashRouter as Router,
} from "react-router-dom";

ReactDOM.render(
  <StrictMode>
    <Router basename={process.env.NX_BASE_HREF}>
    <App />
    </Router>
  </StrictMode>,
  document.getElementById('root')
);
