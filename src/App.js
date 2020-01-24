import React from 'react';
import './App.css';
import PageTitle from './PageTitle'
import NavigationBar from './navigationBar/navigationBar';
import ContentsAria from './contentsAria/contentsAria';
import Footer from './footer/footer';

function App() {
  return (
    <div className="containar">
      <div className="Pagetitle">
        <PageTitle/>
      </div>
      <div className="Navigation">
        <NavigationBar/>
      </div>
      <div className="Contents">
        <ContentsAria/>
      </div>
      <div className="Footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;