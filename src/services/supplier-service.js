export const supplierService = {
    loadSuppliers,
    getSupplierById,
    getSupplierByName
}
import demoSuppliers from '../data/supplier.json'

// const suppliers = [
//     {
//         _id: '101',
//         name: 'הבסטה של אבי',
//         phone: '03-5731674',
//         bn: 516506938
//     },
//     {
//         _id: '102',
//         name: 'פיין מרקט',
//         phone: '03-6748633',
//         bn: 512711730
//     },
//     {
//         _id: '103',
//         name: 'יש לי בוטן',
//         phone: '03-5712878',
//         bn: 512368721
//     },
//     {
//         _id: '104',
//         name: 'צארום בית הבשר והעוף',
//         phone: '???',
//         bn: 514297514
//     },
//     {
//         _id: '105',
//         name: 'חוות נעמי ניהול מעדניות',
//         phone: '077-5640445',
//         bn: 516116779
//     },
//     {
//         _id: '106',
//         name: 'י.ר המקום של מעיין',
//         phone: '077-5243588',
//         bn: 516549185
//     },
// ]

function save() {
    return demoSuppliers
}

function loadSuppliers(filterBy) {
    if (filterBy) {
        var suppliers = demoSuppliers.filter(supplier => supplier.name.toLocaleLowerCase().includes(filterBy))
        console.log(filterBy);
        return sort(suppliers)
    }
    return sort(demoSuppliers)
}

function getSupplierById(supplierId) {
    return demoSuppliers.filter(supplier => supplierId === supplier._id)[0]
}

function getSupplierByName(supplierName) {
    console.log(supplierName);
    return demoSuppliers.filter(supplier => supplier.name.toLocaleLowerCase().includes(supplierName))
}

function sortByDate(arr, dateProp) {
    arr.sort(function (a, b) {
        var dateA = new Date(a[dateProp]);
        var dateB = new Date(b[dateProp]);
        return dateA - dateB;
    });
}


function sort(arr) {
    return arr.sort((a, b) => {
        return a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase() ? -1 : 1

        // if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
        //     return -1
        // }
        // if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
        //     return 1
        // }

        return 0
    })
}