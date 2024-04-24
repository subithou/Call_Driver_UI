import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PrimeReactProvider } from "primereact/api";
import { Provider } from 'react-redux';
import store from './Apps/CallDriver/Redux/store.js';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeReactProvider>
       <Provider store={store}>
       <App />
       </Provider>
    </PrimeReactProvider>
  </React.StrictMode>
)
