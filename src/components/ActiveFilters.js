import React, { Component } from 'react';

export default class ActiveFilters extends Component {

  constructor(props) {
    super(props);
    this.id = 'addsearch-ui-' + ('' + Math.random()).split('.')[1];
  }

  componentDidMount() {
    this.props.ui.activeFilters({
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