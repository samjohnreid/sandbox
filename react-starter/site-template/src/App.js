import React from 'react';
import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import MainContent from './MainContent/MainContent';
import Footer from './Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Sidebar />
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;
