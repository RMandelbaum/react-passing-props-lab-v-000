import React, { Component } from 'react';

import FruitBasket from './FruitBasket';

export default class App extends Component{
  constructor(){
    super();

    this.state = {
      currentFilter: null,
      filters: [],
      fruit: []
    }
  }

  componentWillMount() {
    this.fetchFruit()
    this.fetchFilters()
  }



fetchFruit = () => {
  fetch('/api/fruit')
    .then(response => response.json())
    .then(items => this.setState({ items }));
  }


  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  updateFilter = event => {
    console.log('update filter to: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render(){
    return(
      <FruitBasket
        fruit={this.state.fruit}
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        onUpdateFilter={this.updateFilter}
      />
    );
  }
}
