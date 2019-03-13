import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'
import { addReview } from '.././actions/addReview'
import { deleteReview } from '.././actions/deleteReview'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput add={ this.props.addReview } restaurantId={ this.props.restaurantId }  />
        <Reviews restaurantId={ this.props.restaurantId } reviews={ this.props.reviews } delete={ this.props.deleteReview } />
      </div>
    )
  }
}

export default connect(state => ({ reviews: state.reviews }), { addReview, deleteReview })(ReviewsContainer)
