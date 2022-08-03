import {combineReducers} from 'redux';
import { legacy_createStore as createStore} from 'redux';
import {goodsReducer} from '../reducers/goodsReducer';
import {discountReducer} from '../reducers/discountReducer';
import {TypedUseSelectorHook, useSelector} from 'react-redux';


let rootReducer = combineReducers({
    goods: goodsReducer,
    discount: discountReducer,
})
export let store = createStore(rootReducer)

export const useCustomSelector: TypedUseSelectorHook<AppStateRootType> = useSelector

export type AppStateRootType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store