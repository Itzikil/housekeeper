export const itemService = {
    loadItems
}

const items = [
    {
        _id: 'a101',
        name: 'נפלאות קמח חיטה',
        'bar-code': '7290016144017',
    },
    {
        _id: 'a102',
        name: 'שמנת מתוקה',
        'bar-code': '7290114311038',
    },
    {
        _id: 'a103',
        name: 'חמאת נורמנדי',
        'bar-code': '7290102303878',
        bn: 512368721
    },
    {
        _id: 'a104',
        name: 'חומוס ביתי',
        'bar-code': '6934931906572',
        bn: 514297514
    },
]

function loadItems() {
    return items
}