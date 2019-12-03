import React, { Component } from 'react';

export default class Filters extends Component {

  constructor(props) {
    super(props);
    this.id = 'addsearch-ui-' + ('' + Math.random()).split('.')[1];
  }

  componentDidMount() {
    this.props.ui.filters({
      containerId: this.id,
      ...this.props
    });
  }

  render() {
    return (
      <div id={this.id}></div>
    );
  }
}