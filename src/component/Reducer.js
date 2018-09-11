import { combineReducers } from 'redux'
import todos from './DataReducer'
import toshow from './ViewReducer'

export default combineReducers({
    data: todos,
    view: toshow
})