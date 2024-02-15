import { subgroupService } from "../../service/subgroup-service";

export function loadSubgroups(filterBy) {

    return async (dispatch, getState) => {
        try {
            var groups = getState().groupModule.groups
            const subgroups = await subgroupService.query(filterBy , groups)
            dispatch({ type: 'SET_SUBGROUPS', subgroups })
            return subgroups
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function saveSubgroups(subgroups) {

    return async (dispatch, getState) => {
        try {
            const subgroup = await subgroupService.saveSubgroups(subgroups)
            // const stateSubgroups = getState().subgroupModule.subgroups
            // const idx = stateSubgroups.findIndex(c => c._id === subgroup._id)
            // stateSubgroups.splice(idx, 1, subgroup)
            // console.log(stateSubgroups);
            dispatch({ type: 'SAVE_SUBGROUPS', subgroup })
            return 'hello'
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function updateSubgroup(subgroups) {

    return async (dispatch, getState) => {
        try {
            const subgroup = await subgroupService.saveSubgroups(subgroups)
            console.log(subgroup);
            dispatch({ type: 'UPDATE_SUBGROUP', subgroup })
            return 'hello'
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function removeSubgroup(subgroupId) {

    return async (dispatch) => {
        try {
            const subgroups = await subgroupService.remove(subgroupId)
            dispatch({ type: 'REMOVE_SUBGROUP', subgroupId })
            return 'hello'
        } catch (err) {
            console.log('err:', err)
        }
    }
}