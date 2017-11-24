import React, { Component } from 'react';
import './App.css';

import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import BookList from './Components/BookList';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <div class="container">
            <BookList />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
