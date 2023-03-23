let initialSlidersState = {
    chosenCategory: [
        {id: 1, category: 'drySkin', active: false},
        {id: 2, category: 'wetSkin', active: false},
    ],
}

export const slidersReducer = (state: InitialSlidersStateType = initialSlidersState, action: ActionType): InitialSlidersStateType => {
    switch (action.type) {
        case 'CHOOSE-CATEGORY':
            return {
                ...state,
                chosenCategory:
                    state.chosenCategory.map(category => category.category === action.category || action.category === 'all'
                        ? {...category, active: true}
                        : {...category, active: false})
            }
        default:
            return state
    }
}


// actions
export const chooseCategoryAC = (category: string) => ({type: 'CHOOSE-CATEGORY', category} as const)


// types
type ActionType = ReturnType<typeof chooseCategoryAC>
export type InitialSlidersStateType = typeof initialSlidersState
export type VarietyType = {
    id: number
    volume: string
    price: string
}
export type ItemType = {
    id: number
    title: string
    pictureUrl: string
    description: {
        action: string[]
        ingredients: string[]
        applying: string[]
    }
    variety: VarietyType[]
}