import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Skills } from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <About/>
<Skills/>
<Projects/>
<Contact/>
  </React.StrictMode>
);


