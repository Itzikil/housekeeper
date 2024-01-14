const INITIAL_STATE = {
    subgroups: null,
}

export function subgroupReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SET_SUBGROUPS':
            return {
                ...state,
                subgroups: action.subgroups
            }
        case 'SAVE_SUBGROUPS':
            return {
                ...state,
                subgroups: [...state.subgroups, action.subgroup]
            }
        case 'REMOVE_SUBGROUP':
            return {
                ...state,
                subgroups: state.subgroups.filter(subgroup => subgroup._id !== action.subgroupId)
            }
        case 'UPDATE_SUBGROUP':
            return {
                ...state,
                subgroups: state.subgroups.map(subgroup => subgroup._id === action.subgroup._id ? action.subgroup : subgroup)
            }
        default:
            return state
    }

}