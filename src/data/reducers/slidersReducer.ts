let initialSlidersState = {
    pedicure: [],
    manicure: [],
}


export const slidersReducer = (state: InitialSlidersStateType = initialSlidersState, action: ActionType): InitialSlidersStateType => {
    switch (action.type) {
/*        case 'CHOOSE-CATEGORY':
            return {
                ...state,
                chosenCategory:
                    state.chosenCategory.map(category => category.category === action.category || action.category === 'all'
                        ? {...category, active: true}
                        : {...category, active: false})
            }*/
        default:
            return state
    }
}


// actions
export const changeQuantityAC = (category: string) => ({type: 'CHOOSE-CATEGORY', category} as const)


// types
type ActionType = ReturnType<typeof changeQuantityAC>
export type InitialSlidersStateType = typeof initialSlidersState
export type ItemType = {
    id: number
    quantity: number
}