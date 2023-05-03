export const itemService = {
    loadItems,
    getItemById,
    getDepartments,
    getItemByDepartment
}
import demoItems from '../data/item.json'

function loadItems(filterBy) {
    if (filterBy) {
        var items = demoItems.filter(item => item.name.toLocaleLowerCase().includes(filterBy))
        return sort(items)
    }
    return sort(demoItems)
}


function getItemById(itemId) {
    return demoItems.filter(item => itemId === item['bar-code'])[0]
}

function getItemByDepartment(department) {
    return demoItems.filter(item => department === item['department-name']) 
}

function sort(arr) {
    return arr.sort((a, b) => {
        return  a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase() ? -1 : 1
        
        // if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
        //     return -1
        // }
        // if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
        //     return 1
        // }

        return 0
    })
}

function getDepartments() {
    var departments = []
    demoItems.map(item=>{
        if (!departments.includes(item['department-name']) && item['department-name']) {
            departments.push(item['department-name'])
        }
    })
    return departments
}

