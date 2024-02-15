import { utilsService } from '../services/utils-service.js'
import { storageService } from '../services/storage.service.js'
import { httpService } from '../services/http.service.js'
// import demoSubgroups from '../data2/subgroups.json'

export const subgroupService = {
    query,
    saveSubgroups,
    remove
}

const STORAGE_KEY = 'subGroup'

var gSubgroups = _loadSubgroups()

async function query(filterBy, groups) {
    var subgroups = await httpService.get(STORAGE_KEY, filterBy)
    var sortedSubgroups = []
    groups.forEach(group => {
        var res = subgroups.filter(subgroup => subgroup.groupId === group._id)
        res.sort((a, b) => a.number - b.number)
        sortedSubgroups= [...sortedSubgroups , ...res]
    });
    return sortedSubgroups
}

function _loadSubgroups() {
    let subgroups = storageService.load(STORAGE_KEY)
    // if (!subgroups || !subgroups.length) subgroups = demoSubgroups
    storageService.store(STORAGE_KEY, subgroups)
    return subgroups
}

function _saveSubgroups(subgroupToSave) {
    if (subgroupToSave._id) {
        const idx = gSubgroups.findIndex(robot => robot._id === subgroupToSave._id)
        gSubgroups.splice(idx, 1, subgroupToSave)
    } else {
        subgroupToSave._id = utilsService.makeId()
        gSubgroups.push(subgroupToSave)
        console.log(gSubgroups);
    }
    storageService.store(STORAGE_KEY, gSubgroups)
    return Promise.resolve(subgroupToSave)

}

async function saveSubgroups(subgroup) {
    var savedSubgroup
    if (subgroup._id) {
        savedSubgroup = await httpService.put(`subgroup/${subgroup._id}`, subgroup)
    } else {
        // Later, owner is set by the backend
        // Subgroup._id = utilService.makeId()
        // Subgroup.owner = userService.getLoggedinUser()
        savedSubgroup = await httpService.post('subgroup', subgroup)
    }
    return savedSubgroup
}

function _remove(id) {
    const idx = gSubgroups.findIndex(subgroup => subgroup._id === id)
    gSubgroups.splice(idx, 1)
    if (!gSubgroups.length) gSubgroups = gDefaultSubgroups.slice()
    storageService.store(STORAGE_KEY, gSubgroups)
    return Promise.resolve()
}

async function remove(subgroupId) {
    console.log(subgroupId);
    return httpService.delete(`subgroup/${subgroupId}`)
}