const initilState = {
  filter: 'сheapest',
}
const filterPriseReducer = (state = initilState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return { ...state, filter: action.payload }
    default:
      return state
  }
}
export default filterPriseReducer
