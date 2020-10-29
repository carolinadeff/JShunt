import React from 'react';

import './styles.css';
import Header from './components/Header'
import Routes from './routes';

import { ResearchProvider } from './Contexts/ResearchContext'


function App() {
  return (
    <div className="App">
      <ResearchProvider>
        <Header />
        <Routes />
      </ResearchProvider>
    </div>
  );
}

export default App;
