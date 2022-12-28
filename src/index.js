import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import App from './App'



const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        </Route>
        <Route path="*" element={<div className="p-24">
          <h1 className="text-center text-2xl">Error 404</h1>
          <p className="p-5 text-center text-base">Page not found</p>
        </div>}>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
