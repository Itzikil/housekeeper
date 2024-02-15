import { groupService } from "../../service/group-service";

export function loadGroups() {
    
    return async (dispatch, getState) => {
        try {
            const groups = await groupService.query()
            dispatch({ type: 'SET_GROUPS', groups })
            return groups
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function saveGroups(groups) {
    
    return async (dispatch, getState) => {
        try {
            const group = await groupService.saveGroups(groups)
            // const stateGroups = getState().groupModule.groups
            // const idx = stateGroups.findIndex(c => c._id === group._id)
            // stateGroups.splice(idx, 1, group)
            // console.log(stateGroups);
            dispatch({ type: 'SAVE_GROUPS', group })
            return 'hello'
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function updateGroup(groups) {
    
    return async (dispatch, getState) => {
        try {
            const group = await groupService.saveGroups(groups)
            console.log(group);
            dispatch({ type: 'UPDATE_GROUP', group })
            return 'hello'
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function removeGroup(groupId) {

    return async (dispatch) => {
        try {
            const groups = await groupService.remove(groupId)
            dispatch({ type: 'REMOVE_GROUP', groupId })
            return 'hello'
        } catch (err) {
            console.log('err:', err)
        }
    }
}