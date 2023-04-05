const initialState = {
  loading: false,
  error: false,
  tickets: [],
  id: '',
}
const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ID':
      return { ...state, id: action.id }
    case 'GET_TICKEST': {
      return {
        ...state,
        loading: true,
        tickets: [...state.tickets, ...action.payload],
      }
    }
    case 'LOADING_ALL_TICKEST': {
      return {
        ...state,
        loading: false,
        tickets: [...state.tickets, ...action.payload],
      }
    }
    case 'ERROR': {
      return {
        ...state,
        tickets: [...state.tickets],
        error: true,
      }
    }
    default:
      return state
  }
}
export default ticketsReducer
