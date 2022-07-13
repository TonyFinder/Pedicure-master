import {combineReducers} from 'redux';
import { legacy_createStore as createStore} from 'redux';
import {goodsReducer} from '../reducers/goodsReducer';


let rootReducer = combineReducers({
    goods: goodsReducer
})
export let store = createStore(rootReducer)

export type StoreType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store