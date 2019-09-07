import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import routing from "./routing";

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
