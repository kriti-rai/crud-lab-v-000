import cuid from 'cuid';
export const cuidFn = cuid;

export default function reviewReducer(state=[], action) {
  switch (action.type) {
    case 'ADD_REVIEW':
    return [...state, {text: action.review.text, id: cuidFn(), restaurantId: action.review.restaurantId}]
    case 'DELETE_REVIEW':
    return state.filter( review=> review.id !== action.id )
    default:
      return state
  }
}
