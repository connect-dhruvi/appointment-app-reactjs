import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import ArticleList from './pages/ArticleList';
import ArticlePage from './pages/ArticlePage';
import HomePage from './pages/Home';
import Navbar from './Navbar';
import './App.css';

function App() {
let a=['a','b','c']
a['100'] ='d'
console.log(a +"-------------------------");

  return (
  <>
    <Router>
      <Navbar />
      <div className="container">
    <h1>My Travel Blog</h1>
        <Switch><Route path="/" component={HomePage} exact />
          <Route path="/about" component={About} />
          <Route path="/list" component={ArticleList} />
          <Route path="/article/:name" component={ArticlePage} />
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
