import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import MainContent from './MainContent/MainContent';
import Blog from './Blog/Blog';
import Footer from './Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main>
          <Sidebar />
          <Route path="/" exact component={MainContent} />
          <Route path="/blog" component={Blog} />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
