import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import './index.css';
import { AuthProvider } from './Components/Authentication/AuthContext';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <App />
    </AuthProvider>
);