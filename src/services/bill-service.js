export const billService = {
    loadBills,
    getEmptyBill,
    getItemsLine,
    addBill
}


const bills = [
    {
        _id: 'b101',
        supplier: {
            _id: '516',
        },
        items: [
            { _id: 'a103', price: 14.90, quantity: 1 },
            { _id: 'a104', price: 25, quantity: 1 },
            { _id: 'a105', price: 159, quantity: 0.562 },
            { _id: 'a106', price: 149, quantity: 0.318 },
        ]
    },
    {
        _id: 'b102',
        supplier: {
            _id: '644',
        },
        items: [
            { _id: 'a101', price: 8.90, quantity: 1 },
            { _id: 'a102', price: 7.90, quantity: 2 },
        ]
    },
]

function getEmptyBill() {
    return {
        supplier: { _id: '' },
    }
}

function getItemsLine() {
    return [{ name: '', price: 0, quantity: 0 }]
}

function loadBills() {
    return bills
}

function addBill(bill) {
    bill._id = makeId()
    bills.push(bill)
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
