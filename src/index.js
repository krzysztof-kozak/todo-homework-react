import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { TodoEditor, NoMatch } from './components';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<TodoEditor />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/edit/:id" element={<TodoEditor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
