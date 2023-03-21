export const i18Service = {
    doTrans,
    getTrans,
    setLang,
    getTransLang
}

var gTrans = {
    'bill': {
        en: 'bill',
        he: 'חשבון',
    },
    'bills': {
        en: 'bills',
        he: 'חשבונות',
    },
    'supplier': {
        en: 'supplier',
        he: 'ספק',
    },
    'suppliers': {
        en: 'suppliers',
        he: 'ספקים',
    },
    'item': {
        en: 'item',
        he: 'פריט',
    },
    'items': {
        en: 'items',
        he: 'פריטים',
    },
    'household': {
        en: 'Household',
        he: 'משק בית',
    },
    'b.n': {
        en: 'b.n',
        he: 'ח.פ',
    },
    'rate': {
        en: 'rate',
        he: 'דירוג',
    },
    'price': {
        en: 'price',
        he: 'מחיר',
    },
    'search': {
        en: 'search',
        he: 'חפש',
    },
    'add-new-book': {
        en: 'add-new-book',
        he: 'הוסף ספר חדש',
    },
    'read': {
        en: 'read',
        he: 'קרא',
    },
    'update': {
        en: 'update',
        he: 'עדכן',
    },
    'delete': {
        en: 'delete',
        he: 'מחק',
    },
    'add': {
        en: 'add',
        he: 'הוסף',
    },
    'Image': {
        en: 'Image',
        he: 'תמונה',
    },
    'title': {
        en: 'title',
        he: 'שם',
    },
    'actions': {
        en: 'actions',
        he: 'פעולות',
    },
    "book-description": {
        en: "Book Description",
        he: 'עדכן את מחיר הספר',
    },
    "close": {
        en: "close",
        he: 'סגור',
    },
}

let gCurrLang = 'en'

function doTrans() {
    const els = document.querySelectorAll('[data-trans]')
    els.forEach(el => {
        const transKey = el.dataset.trans
        const trans = getTrans(transKey)
        el.innerText = trans
        if (el.placeholder) el.placeholder = trans
    })
}

function getTrans(transKey) {
    const transMap = gTrans[transKey]
    if (!transMap) return 'UNKNOWN'

    let trans = transMap[gCurrLang]
    if (!trans) trans = transMap.en
    return trans
}

function setLang(lang) {
    var lang = gCurrLang === 'en' ? 'he' : 'en'
    gCurrLang = lang
}

function getTransLang() {
    return gCurrLang
}