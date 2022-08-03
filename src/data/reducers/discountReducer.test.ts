import {changeQuantityAC, discountReducer, InitialDiscountStateType} from './discountReducer';

let initialState: InitialDiscountStateType = {
    filmsQuantity: 10,
    slidersQuantity: 15,
}

test('Change quantity for sliders', ()=> {
    let endState = discountReducer(initialState, changeQuantityAC({slidersQuantity: 50}))

    expect(initialState.filmsQuantity).toBe(10)
    expect(initialState.slidersQuantity).toBe(15)
    expect(endState.filmsQuantity).toBe(10)
    expect(endState.slidersQuantity).toBe(50)
})
test('Change quantity for films', ()=> {
    let endState = discountReducer(initialState, changeQuantityAC({filmsQuantity: 5}))

    expect(initialState.filmsQuantity).toBe(10)
    expect(initialState.slidersQuantity).toBe(15)
    expect(endState.filmsQuantity).toBe(5)
    expect(endState.slidersQuantity).toBe(15)
})