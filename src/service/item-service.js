import { utilsService } from '../services/utils-service.js'
import { storageService } from '../services/storage.service.js'
import { httpService } from '../services/http.service.js'
import demoItems from '../data2/items.json'

export const itemService = {
    query,
    saveItems,
    remove
}

const STORAGE_KEY = 'item'

var gItems = _loadItems()


async function query(filterBy, subgroups) {
    var items = await httpService.get(STORAGE_KEY, filterBy)
    var sortedItems = []
    subgroups.forEach(sub => {
        var res = items.filter(item => item.subgroupId === sub._id)
        res.sort((a, b) => a.number - b.number)
        sortedItems= [...sortedItems , ...res]
    });
    return sortedItems
    // return gItems
}

function _loadItems() {
    let items = storageService.load(STORAGE_KEY)
    if (!items || !items.length) items = demoItems
    storageService.store(STORAGE_KEY, items)
    return items
}

function _saveItems(itemToSave) {
    if (itemToSave._id) {
        const idx = gItems.findIndex(robot => robot._id === itemToSave._id)
        gItems.splice(idx, 1, itemToSave)
        console.log('??????');
    } else {
        itemToSave._id = utilsService.makeId()
        gItems.push(itemToSave)
        console.log(gItems);
    }
    storageService.store(STORAGE_KEY, gItems)
    return Promise.resolve(itemToSave)

}

async function saveItems(item) {
    var savedItem
    if (item._id) {
        savedItem = await httpService.put(`item/${item._id}`, item)
    } else {
        // Later, owner is set by the backend
        // Item._id = utilService.makeId()
        // Item.owner = userService.getLoggedinUser()
        savedItem = await httpService.post('item', item)
    }
    return savedItem
}

function _remove(id) {
    const idx = gItems.findIndex(item => item._id === id)
    gItems.splice(idx, 1)
    if (!gItems.length) gItems = gDefaultItems.slice()
    storageService.store(STORAGE_KEY, gItems)
    return Promise.resolve()
}

async function remove(itemId) {
    console.log(itemId);
    return httpService.delete(`item/${itemId}`)
}