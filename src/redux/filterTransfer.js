const initilState = {
  all: false,
  withOut: false,
  oneTransfer: false,
  twoTransfer: false,
  threeTransfer: false,
}

const filterTransferReducer = (state = initilState, action) => {
  switch (action.type) {
    case 'SET_FILTER_TRANS_ALL':
      return {
        ...state,
        all: !state.all,
        withOut: !state.all,
        oneTransfer: !state.all,
        twoTransfer: !state.all,
        threeTransfer: !state.all,
      }
    case 'SET_FILTER_TRANS':
      return { ...state, [action.payload]: action.checked, all: false }
    default:
      return state
  }
}
export default filterTransferReducer
