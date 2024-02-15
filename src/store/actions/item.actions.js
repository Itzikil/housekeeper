import { itemService } from "../../service/item-service";

export function loadItems(filterBy) {
    
    return async (dispatch, getState) => {
        try {
            var subgroups = getState().subgroupModule.subgroups
            const items = await itemService.query(filterBy , subgroups)
            dispatch({ type: 'SET_ITEMS', items })
            return items
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function saveItems(items) {
    
    return async (dispatch, getState) => {
        try {
            const item = await itemService.saveItems(items)
            // const stateItems = getState().itemModule.items
            // const idx = stateItems.findIndex(c => c._id === item._id)
            // stateItems.splice(idx, 1, item)
            // console.log(stateItems);
            dispatch({ type: 'SAVE_ITEMS', item })
            return 'hello'
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function updateItem(items) {
    
    return async (dispatch, getState) => {
        try {
            const item = await itemService.saveItems(items)
            console.log(item);
            dispatch({ type: 'UPDATE_ITEM', item })
            return 'hello'
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function removeItem(itemId) {

    return async (dispatch) => {
        try {
            const items = await itemService.remove(itemId)
            dispatch({ type: 'REMOVE_ITEM', itemId })
            return 'hello'
        } catch (err) {
            console.log('err:', err)
        }
    }
}