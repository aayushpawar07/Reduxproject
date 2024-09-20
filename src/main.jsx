import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import './index.css'
import {store} from '/src/app/store'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App></App>
  </Provider>
)
