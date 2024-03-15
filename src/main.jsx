import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { TaskProvider } from './contexts/tasks.jsx';
import { UserProvider } from './contexts/user.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <TaskProvider>
    <UserProvider>
    <App />
    </UserProvider>
    </TaskProvider>
  </React.StrictMode>
  </BrowserRouter>
)