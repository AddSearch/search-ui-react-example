import React, { Component } from 'react';
import './App.css';
import AddSearchClient from 'addsearch-js-client';
import AddSearchUI from 'addsearch-search-ui';
import SearchField from './components/SearchField';
import SearchResults from './components/SearchResults';
import Pagination from './components/Pagination';

class App extends Component {

  constructor(props) {
    super(props);

    // AddSearch JS client with an example index. Get your own SITEKEY by signing up at www.addsearch.com
    this.addSearchClient = new AddSearchClient('2c32bf3eb06b30af5f8208481aea3e8b');
    this.addSearchUI = new AddSearchUI(this.addSearchClient);
  }


  componentDidMount() {
    // AddSearch UI needs to be started after all Search UI components have been added
    this.addSearchUI.start();
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchField ui={this.addSearchUI}
                       button="Hae" />
        </header>

        <main>
          <SearchResults ui={this.addSearchUI} />
          <Pagination ui={this.addSearchUI} />
        </main>
      </div>
    );
  }
}

export default App;
