import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
    return (
      <ul>
        <br></br><u><strong><em><font color='pink'>{reviews.length > 0? "Reviews": null}</font></em></strong></u>
        {reviews.map(review => <Review key={ review.id } review={ review } restaurantId={ this.props.restaurantId } delete={ this.props.delete }/>)}
      </ul>
    );
  }
};

export default Reviews;
