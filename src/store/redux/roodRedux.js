import { combineReducers } from 'redux'

import filterPriseReducer from './filterPrice'
import filterTransferReducer from './filterTransfer'
import ticketsReducer from './ticketsReduce'

export const rootReducer = combineReducers({
  filterPriseReducer,
  filterTransferReducer,
  ticketsReducer,
})
