import React, { Component } from 'react';

export default class SearchResults extends Component {

  constructor(props) {
    super(props);
    this.id = 'addsearch-ui-' + ('' + Math.random()).split('.')[1];
    this.containerEl = null;
  }

  componentDidMount() {
    this.props.ui.searchResults({
      containerId: this.id,
      ...this.props
    });

    this.containerEl = document.getElementById(this.id);
    this.containerEl.addEventListener('click', handleElementClick);

  }

  componentWillUnmount() {
    this.containerEl.removeEventListener('click', handleElementClick);
  }

  render() {
    return (
      <div id={this.id}></div>
    );
  }
}

export const handleElementClick = (event) => {
  if (event.target.classList.contains('hit')) {
    console.log('handleElementClick', event.target.querySelector('a').textContent);
  }
};
