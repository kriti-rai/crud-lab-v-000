import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    // debugger
    return(
      <ul>
        <h1><font color='grey'>{this.props.restaurants.length > 0? "Restaurants": null}</font></h1>
        { this.props.restaurants.map(restaurant => <Restaurant key={ restaurant.id } restaurant={ restaurant } delete={ this.props.delete } />) }
      </ul>
    );
  }
};

export default Restaurants;
