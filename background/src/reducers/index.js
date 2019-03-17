import { combineReducers } from 'redux'

import createObject from './createObj'
import matches from './matches'

export default combineReducers({
  createObject,
  matches
})
