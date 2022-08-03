let initialDiscountState = {
    filmsQuantity: 15,
    slidersQuantity: 20,
}

export const discountReducer = (state: InitialDiscountStateType = initialDiscountState, action: ActionType): InitialDiscountStateType => {
    switch (action.type) {
        case 'CHANGE-QUANTITY':
            return {...state, ...action.payload}
        default:
            return state
    }
}

// actions
export const changeQuantityAC = (payload: payloadType) => ({type: 'CHANGE-QUANTITY', payload} as const)

// types
type ActionType = ReturnType<typeof changeQuantityAC>
export type InitialDiscountStateType = typeof initialDiscountState
export type payloadType = {
    filmsQuantity?: number
    slidersQuantity?: number
}