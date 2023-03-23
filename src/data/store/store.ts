import {combineReducers} from 'redux';
import { legacy_createStore as createStore} from 'redux';
import {goodsReducer} from '../reducers/goodsReducer';
import {discountReducer} from '../reducers/discountReducer';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {slidersReducer} from '../reducers/slidersReducer';


let rootReducer = combineReducers({
    goods: goodsReducer,
    discount: discountReducer,
    sliders: slidersReducer,
})
export let store = createStore(rootReducer)

export const useCustomSelector: TypedUseSelectorHook<AppStateRootType> = useSelector

export type AppStateRootType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store