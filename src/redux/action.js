import AviasalesApi from '../services/apiSersices'

const servicApi = new AviasalesApi()

export const getId = () => {
  return (dispatch) => {
    servicApi
      .getSearchId()
      .then((resalt) => {
        dispatch({
          type: 'GET_ID',
          id: resalt,
        })
        return resalt
      })
      .then((id) => dispatch(getTickets(id)))
  }
}

export const getTickets = (id) => {
  return (dispatch) => {
    servicApi
      .getSerchTilets(id)
      .then((resalt) => {
        if (resalt.status === 500) {
          return dispatch(getTickets(id))
        }
        if (resalt.status === 200) {
          return resalt.json()
        }
        return dispatch({ type: 'ERROR' })
      })
      .then(({ tickets, stop }) => {
        if (!stop) {
          dispatch({
            type: 'GET_TICKEST',
            payload: tickets,
          })
          dispatch(getTickets(id))
        } else {
          dispatch({
            type: 'LOADING_ALL_TICKEST',
            payload: tickets,
          })
        }
      })
      .catch(() => {
        dispatch({ type: 'ERROR' })
      })
  }
}
