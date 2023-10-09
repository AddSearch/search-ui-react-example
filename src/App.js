import React, { Component } from 'react';
import './App.css';
import AddSearchClient from 'addsearch-js-client';
import AddSearchUI from 'addsearch-search-ui';
import SearchField from './components/SearchField';
import SearchResults from './components/SearchResults';
import Pagination from './components/Pagination';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export const SEARCHRESULTS_TEMPLATE = `
  <div class="addsearch-searchresults">    
    {{#if resultcount}}
      {{> numberOfResultsTemplate }}
    {{/if}}
    
    {{#each hits}}
      <div class="hit{{#equals type "PROMOTED"}} promoted{{/equals}}" >
        <h3>
          <a href="{{url}}" data-analytics-click="{{id}}">{{#if title}} {{title}} {{else}} {{removeTrailingQueriesFromUrl url}} {{/if}}</a>
        </h3>
        <div class="highlight">
          {{> searchResultImageTemplate}}
          {{{highlight}}}{{#not type "PROMOTED"}}&#8230;{{/not}}
        </div>
        {{#gt categories.length 1}}
          <div class="category">
            {{selectCategory ..}}
          </div>
        {{/gt}}
      </div>
    {{/each}}
  </div>
`;

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
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/search" element={
              <div className="App">
                <header className="App-header">
                  <SearchField ui={this.addSearchUI}
                               button="Search"
                               searchAsYouType={true} />
                </header>

                <main>
                  <SearchResults ui={this.addSearchUI} template={SEARCHRESULTS_TEMPLATE} />
                  <Pagination ui={this.addSearchUI} />
                </main>
              </div>
            }>
            </Route>
            <Route path="/" element={<span>Home</span>}>
            </Route>
          </Routes>
        </div>
      </Router>
    );

  }
}

export default App;
