import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {


  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          <h4><font color='grey'> {restaurant.text} </font>
          <span><button Click={() => {this.props.delete(restaurant.id)}}> X </button></span></h4>
          <ReviewsContainer restaurantId={ restaurant.id }/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
