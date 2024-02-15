import { utilsService } from '../services/utils-service.js'
import { storageService } from '../services/storage.service.js'
import { httpService } from '../services/http.service.js'
// import demoGroups from '../data2/groups.json'

export const groupService = {
    query,
    saveGroups,
    remove,
}

const STORAGE_KEY = 'group'

var gGroups = _loadGroups()


async function query() {
    var groups = await httpService.get(STORAGE_KEY)
    return groups.sort((a, b) => a.number - b.number)
    // return gGroups
}

function _loadGroups() {
    let groups = storageService.load(STORAGE_KEY)
    // if (!groups || !groups.length) groups = demoGroups
    storageService.store(STORAGE_KEY, groups)
    return groups
}

function _saveGroups(groupToSave) {
    if (groupToSave._id) {
        const idx = gGroups.findIndex(robot => robot._id === groupToSave._id)
        gGroups.splice(idx, 1, groupToSave)
        console.log('??????');
    } else {
        groupToSave._id = utilsService.makeId()
        gGroups.push(groupToSave)
        console.log(gGroups);
    }
    storageService.store(STORAGE_KEY, gGroups)
    return Promise.resolve(groupToSave)

}

async function saveGroups(group) {
    var savedGroup
    if (group._id) {
        savedGroup = await httpService.put(`group/${group._id}`, group)
    } else {
        // Later, owner is set by the backend
        // Group._id = utilService.makeId()
        // Group.owner = userService.getLoggedinUser()
        savedGroup = await httpService.post('group', group)
    }
    return savedGroup
}

function _remove(id) {
    const idx = gGroups.findIndex(group => group._id === id)
    gGroups.splice(idx, 1)
    if (!gGroups.length) gGroups = gDefaultGroups.slice()
    storageService.store(STORAGE_KEY, gGroups)
    return Promise.resolve()
}

async function remove(groupId) {
    console.log(groupId);
    return httpService.delete(`group/${groupId}`)
}