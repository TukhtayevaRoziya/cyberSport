import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom/dist'
import App from './App'
import 'antd/dist/antd.css'; 
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
)
