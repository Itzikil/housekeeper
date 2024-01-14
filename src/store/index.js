import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import {thunk} from 'redux-thunk'
import { itemReducer } from './reducers/item.reducer'
import { groupReducer } from './reducers/group.reducer.js'
import { subgroupReducer } from './reducers/subgroup.reducer.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    itemModule: itemReducer,
    groupModule: groupReducer,
    subgroupModule: subgroupReducer,
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
