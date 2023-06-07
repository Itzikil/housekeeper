export const billService = {
    loadBills,
    getEmptyBill,
    getItemsLine,
    addBill,
    getItemSummary,
    filterByDays,
    getGroupById,
    loadGroups
}
import bills from '../data/bill.json'
import groups from '../data/groups.json'
import { supplierService } from './supplier-service'

function getEmptyBill() {
    return {
        supplier: { _id: '' },
        date: '',
        total: '',
        'reference number': '',
        discount: ''
    }
}

function getItemsLine() {
    return [{ name: '', price: '', quantity: '' ,discount: ''}]
}

function loadBills(filterBy) {
    if (filterBy){
        var filteredBills = bills.filter(bill => bill.supplier.name.includes(filterBy))
        return sortByDate(filteredBills,'date')
    }
    return sortByDate(bills,'date')
}

function loadGroups(){
return groups
}

function getGroupById(groupId) {
    return groups.filter(group => group['group-code'] === groupId)[0]
}

function addBill(bill) {
    bill._id = makeId()
    bills.unshift(bill)
    return bills
}

export function makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function getBillBySupplier(name){
    var suppliers = supplierService.getSupplierByName(name)
    var suplliersIds = suppliers.map(supplier => supplier._id)
    console.log(suplliersIds);
    return suplliersIds
}

function getItemSummary(itemId, groupCode){
    var pricesArray= []
    bills.forEach((bill) => {
        if (!itemId && groupCode === bill.supplier['group-code']) {
            bill.items.forEach((item) => {
                  item.date = bill.date
                  item['reference number'] = bill['reference number']
                  pricesArray.push(item);
                  item.supplier = bill.supplier
                }
              );
        } else {
            bill.items.forEach((item) => {
                if (item._id === itemId) {
                    item.date = bill.date
                    item['reference number'] = bill['reference number']
                    pricesArray.push(item);
                  item.supplier = bill.supplier
                }
            });
        }
      });
      return sortByDate(pricesArray)
}

function filterByDays(array , days) {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - +days);
  
    return array.filter(obj => {
      const objDate = new Date(obj.date);
      return objDate >= thirtyDaysAgo;
    });
}
  
// const fs = require('fs')
// import demoBill from '../data/demo-bill.json'
// const filePath = '../data/bill.json';

// var result = gatherObjectsById(demoBill)
// console.log(result);

// function gatherObjectsById(demoBill) {
//     const result = [];
//     demoBill.map(bill => {
//         if (!result.some(e => e['reference number'] === bill['reference number'])) {
//             result.push(
//                 {
//                     date: bill.date,
//                     'reference number': bill['reference number'],
//                     supplier: {
//                         _id: bill.supplier,
//                     },
//                     items: [
//                         { _id: bill._id, price: +bill.price.replace(',',''), quantity: +bill.quantity },
//                     ]
//                 }
//             )
//         }
//         else {
//             var idx = result.findIndex(e => e['reference number'] === bill['reference number'])
//             result[idx].items.push(
//                 { _id: bill._id, price: +bill.price.replace(',',''), quantity: +bill.quantity },
//             )
//         }
//     })

    // writeArrayToJsonFile(filePath,result)
//     return result;
// }

// function writeArrayToJsonFile(filePath, arrayData) {
//   const jsonData = JSON.stringify(arrayData, null, 2);
//   fs.writeFileSync(filePath, jsonData, 'utf8');
//   console.log(`Array data written to file: ${filePath}`);
// }

// var str = 'aa,aa'
// replaceIt()
// function replaceIt(){
//     str.replace(',','')
//     console.log(str.replace(',',''));
// }

function sortByDate(arr, dateProp) {
    return arr.sort(function(a, b) {
      var dateA = new Date(a[dateProp]);
      var dateB = new Date(b[dateProp]);
      return dateB - dateA ;
    });
/// the date is suppose to be yyyy-mm-dd so the sort can sort  it right
}
  
// function sort(arr) {
//     return arr.sort((a, b) => {
//         return  a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase() ? -1 : 1
        
//         // if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
//         //     return -1
//         // }
//         // if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
//         //     return 1
//         // }

//         return 0
//     })
// }