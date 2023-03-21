export const billService = {
    loadBills
}


const bills = [
    {
        _id: 'b101',
        supplier: {
            _id: '105',
        },
        items: [
            { _id: 'a103', price:14.90, quantity: 1},
            { _id: 'a104', price:25, quantity: 1},
            { _id: 'a105', price:159, quantity: 0.562},
            { _id: 'a106', price:149, quantity:0.318},
        ]
    },
    {
        _id: 'b102',
        supplier: {
            _id: '102',
        },
        items: [
            { _id: 'a101', price:8.90, quantity: 1},
            { _id: 'a102', price:7.90, quantity: 2},
        ]
    },
]

function loadBills() {
    return bills
}