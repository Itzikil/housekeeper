export const supplierService = {
    loadSuppliers,
    getSupplierById
}

const suppliers = [
    {
        _id: '101',
        name: 'הבסטה של אבי',
        phone: '03-5731674',
        bn: 516506938
    },
    {
        _id: '102',
        name: 'פיין מרקט',
        phone: '03-6748633',
        bn: 512711730
    },
    {
        _id: '103',
        name: 'יש לי בוטן',
        phone: '03-5712878',
        bn: 512368721
    },
    {
        _id: '104',
        name: 'צארום בית הבשר והעוף',
        phone: '???',
        bn: 514297514
    },
    {
        _id: '105',
        name: 'חוות נעמי ניהול מעדניות',
        phone: '077-5640445',
        bn: 516116779
    },
    {
        _id: '106',
        name: 'י.ר המקום של מעיין',
        phone: '077-5243588',
        bn: 516549185
    },
]

function loadSuppliers() {
    return suppliers
}

function getSupplierById(supplierId) {
    return suppliers.filter(supplier => supplierId === supplier._id)[0]
}