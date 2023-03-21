export const itemService = {
    loadItems,
    getItemById
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
    },
    {
        _id: 'a104',
        name: 'חומוס ביתי 500 גר',
        'bar-code': '6934931906572',
    },
    {
        _id: 'a105',
        name: 'צדר וינטג',
        'bar-code': '336',
    },
    {
        _id: 'a106',
        name: 'אולד אמסטרדם',
        'bar-code': '387',
    },
]

function loadItems() {
    return items
}


function getItemById(itemId) {
    return items.filter(item => itemId === item._id)[0]
}