export const billService = {
    loadBills,
    getEmptyBill,
    getItemsLine,
    saveBill,
    getItemSummary,
    filterByDays,
    getGroupById,
    loadGroups,
    getBillById,
    groupByThreeMonths,
    splitMonthes,
    lastItemFromSupplier,
    lastThreePurchases,
    get3LastBills
}

import bills from '../data/bill.json'
import groups from '../data/groups.json'
import { supplierService } from './supplier-service'
import { utilsService } from './utils-service'

function getEmptyBill() {
    return {
        supplier: { _id: '', 'group-code': '', name: '' },
        date: '',
        total: '',
        // 'reference-number': '',
        discount: ''
    }
}

function getBillById(billId) {
    var bill = bills.filter(bill => bill._id === billId)
    return bill[0]
}

function getItemsLine() {
    return [{ name: '', price: '', quantity: '', discount: ''  , total: ''}]
}

function loadBills(filterBy, amount = 0) {
    var billsArray = bills
    if (amount === 'all') {
        return sortByDate(billsArray, 'date')
    }

    if (filterBy) {
        billsArray = bills.filter(bill => bill.supplier.name.includes(filterBy))
    }

    const endIndex = (amount + 1) * 100;
    return sortByDate(billsArray, 'date').slice(0, endIndex);
}

function loadGroups() {
    return groups
}

function getGroupById(groupId) {
    return groups.filter(group => group['group-code'] === groupId)[0]
}

function saveBill(bill) {
    return bill._id ? _updateBill(bill) : _addBill(bill)
}

function _addBill(bill) {
    bill._id = utilsService.makeId()
    var supplier = supplierService.getSupplierById(bill.supplier._id)
    bill.supplier.name = supplier.name
    bill.supplier['group-code'] = supplier['group-code']
    bills.unshift(bill)
    return bill
}

function _updateBill(bill) {
    const index = bills.findIndex(c => bill._id === c._id)
    if (index !== -1) {
        bills[index] = bill
    }
    return bill
}
function getBillBySupplier(name) {
    var suppliers = supplierService.getSupplierByName(name)
    var suppliersIds = suppliers.map(supplier => supplier._id)
    return suppliersIds
}

function lastItemFromSupplier(itemId, supplierId) {
    var sortedBills = sortByDate(bills)
    var bill = sortedBills.find(bill => bill.supplier._id === supplierId && bill.items.some(item => item._id === itemId))
    if (!bill) return
    return bill.items.find(item => item._id === itemId)
}

function lastThreePurchases(itemId) {
    var lastThreeItems = [];
    var count = 0;

    for (var i = bills.length - 1; i >= 0 && count < 3; i--) {
        var bill = bills[i];

        var item = bill.items.find(item => item._id === itemId);
        if (item) {
            item.supplier = bill.supplier.name
            item.date = bill.date
            lastThreeItems.unshift(item); // Add the item at the beginning of the array
            count++;
        }
    }

    return lastThreeItems;
}

// function getItemSummary(itemId, groupCode){
//     var pricesArray= []
//     bills.forEach((bill) => {
//         if (!itemId && groupCode === bill.supplier['group-code']) {
//             bill.items.forEach((item) => {
//                   item.date = bill.date
//                   item['reference number'] = bill['reference number']
//                   item.supplier = bill.supplier
//                   pricesArray.push(item);
//                 }
//               );
//             }else if (groupCode === 'supplier' && itemId === bill.supplier._id) {
//             bill.items.forEach((item) => {
//                   item.date = bill.date
//                   item['reference number'] = bill['reference number']
//                   item.supplier = bill.supplier
//                   pricesArray.push(item);
//                 }
//               );
//             }else if (groupCode === 'supplier' && itemId === bill.supplier._id) {
//             bill.items.forEach((item) => {
//                   item.date = bill.date
//                   item['reference number'] = bill['reference number']
//                   item.supplier = bill.supplier
//                   pricesArray.push(item);
//                 }
//               );
//             }else if (groupCode === 'department') {
//                 bill.items.forEach((item) => {
//                 if (item.department === itemId) {
//                   item.date = bill.date
//                   item['reference number'] = bill['reference number']
//                   item.supplier = bill.supplier
//                   pricesArray.push(item);
//                 }
//             }
//               );
//         } else {
//             bill.items.forEach((item) => {
//                 if (item._id === itemId) {
//                     item.date = bill.date
//                     item['reference number'] = bill['reference number']
//                     item.supplier = bill.supplier
//                     pricesArray.push(item);
//                 }
//             });
//         }
//       });
//       return sortByDate(pricesArray)
// }

function getItemSummary(itemId, groupCode, supplierId) {
    const pricesArray = []

    bills.forEach((bill) => {
        const itemsToPush = bill.items.filter((item) => {
            if (groupCode === bill.supplier['group-code'] && (!itemId || item.department === itemId)) return true

            if (groupCode === 'supplier' && itemId === bill.supplier._id) return true

            if (groupCode === 'supplier-items' && supplierId === bill.supplier._id && itemId === item._id) return true

            if (groupCode === 'department' && itemId === item.department) return true

            if (!groupCode && itemId === item._id) return true
        })

        itemsToPush.forEach((item) => {
            item.date = bill.date
            // item['reference-number'] = bill['reference-number']
            item.supplier = bill.supplier
            pricesArray.push(item)
        })
    })

    return sortByDate(pricesArray)
}

function get3LastBills(supplierId) {
    const pricesArray = [];
    let billsCount = 0;
    const sortedBills = sortByDate(bills);

    sortedBills.some(bill => {
        if (supplierId !== bill.supplier._id) return false;

        billsCount++;
        bill.items.forEach(item => {
            if (pricesArray.some(priceItem => priceItem.name === item.name)) return
            item.date = bill.date;
            // item['reference-number'] = bill['reference-number'];
            item.supplier = bill.supplier;
            pricesArray.push(item);
        });

        return billsCount === 3;
    });

    return sortByDate(pricesArray);
}

function filterByDays(array, days) {
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - +days);

    return array.filter(obj => {
        const objDate = new Date(obj.date);
        return objDate >= thirtyDaysAgo;
    });
}

function sortByDate(arr, dateProp) {
    return arr.sort(function (a, b) {
        var dateA = new Date(a[dateProp]);
        var dateB = new Date(b[dateProp]);
        return dateB - dateA;
    });
    /// the date is suppose to be yyyy-mm-dd so the sort can sort it right
}

function groupByThreeMonths(array) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    return array.sort((a, b) => new Date(a.date) - new Date(b.date)).reduce((groups, item) => {
        const itemDate = new Date(item.date);
        const itemYear = itemDate.getFullYear();
        const itemMonth = itemDate.getMonth();
        const monthsDiff = (currentYear - itemYear) * 12 + (currentMonth - itemMonth);
        const groupIndex = Math.floor(monthsDiff / 3);

        if (!groups[groupIndex]) {
            groups[groupIndex] = [];
        }

        groups[groupIndex].push(item);

        return groups;
    }, []);
}

function splitMonthes(array) {
    const groupedArray = array.reduce((result, obj) => {
        const month = new Date(obj.date).getMonth();
        if (!result[month]) {
            result[month] = [];
        }
        result[month].push(obj);
        return result;
    }, {});

    const finalArray = Object.values(groupedArray);
    return finalArray
}

// groupObjectsByYear(bills)
// function groupObjectsByYear(arrayOfObjects, datePropertyName = 'date') {
//     const groupedObjects = {};
  
//     arrayOfObjects.forEach((obj) => {
//       const date = obj[datePropertyName];
//       if (date) {
//         const year = new Date(date).getFullYear();
//         if (!groupedObjects[year]) {
//           groupedObjects[year] = [];
//         }
//         groupedObjects[year].push(obj);
//       }
//     });
//   console.log(groupedObjects);
//     return groupedObjects;
//   }
  
  
//   groupObjectsByYearWithItemCount(bills)
//   function groupObjectsByYearWithItemCount(arrayOfObjects, datePropertyName = 'date') {
//     const groupedObjects = {};
  
//     arrayOfObjects.forEach((obj) => {
//       const date = obj[datePropertyName];
//       if (date) {
//         const year = new Date(date).getFullYear();
//         if (!groupedObjects[year]) {
//           groupedObjects[year] = {
//             items: [],
//             itemCount: 0,
//           };
//         }
//         groupedObjects[year].items.push(obj);
//         groupedObjects[year].itemCount += obj.items.length;
//       }
//     });
//   console.log(groupedObjects);
//     return groupedObjects;
//   }