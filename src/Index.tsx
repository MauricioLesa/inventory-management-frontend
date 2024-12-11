import {createRoot} from 'react-dom/client';
import {StrictMode} from 'react';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';

const root =  createRoot(document.getElementById("app")!);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </StrictMode>
)