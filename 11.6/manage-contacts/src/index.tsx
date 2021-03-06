import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css/normalize.css'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {appService} from "./appService";

appService.init();

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
