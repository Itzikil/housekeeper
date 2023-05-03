import { storageService } from "./storage.service";

export const i18Service = {
    doTrans,
    getTrans,
    setLang,
    getTransLang
}

var gTrans = {
    'Total': {
        en: 'Total',
        he: 'סה"כ',
    },
    'to': {
        en: 'to',
        he: 'ל',
    },
    'city': {
        en: 'city',
        he: 'עיר',
    },
    'ביגוד': {
        en: 'Clothes',
        he: 'ביגוד',
    },
    'רכב': {
        en: 'Car',
        he: 'רכב',
    },
    'ממתקים': {
        en: 'Sweets',
        he: 'ממתקים',
    },
    'יינות': {
        en: 'Winery',
        he: 'יינות',
    },
    'Fruit': {
        en: 'Fruit',
        he: 'פירות',
    },
    'פירות': {
        en: 'Fruit',
        he: 'פירות',
    },
    'Diary': {
        en: 'Diary',
        he: 'מוצרי חלב',
    },
    'מוצרי חלב': {
        en: 'Diary',
        he: 'מוצרי חלב',
    },
    'Fish': {
        en: 'Fish',
        he: 'דגים',
    },
    'דגים': {
        en: 'Fish',
        he: 'דגים',
    },
    'Vegtable': {
        en: 'Vegtable',
        he: 'ירקות',
    },
    'ירקות': {
        en: 'Vegtable',
        he: 'ירקות',
    },
    'Department': {
        en: 'Department',
        he: 'מחלקה',
    },
    'summary': {
        en: 'summary',
        he: 'סיכום',
    },
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
    'total': {
        en: 'total',
        he: 'סהכ',
    },
    'quantity': {
        en: 'quantity',
        he: 'כמות',
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
    'date': {
        en: 'date',
        he: 'תאריך',
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

let gCurrLang = storageService.load('lang') || Intl.DateTimeFormat().resolvedOptions().locale

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

function setLang(lang = gCurrLang) {
    console.log(lang);
    gCurrLang = lang
    console.log(lang);
    if (lang === 'he') document.body.classList.add('rtl')
    else document.body.classList.remove('rtl')
    storageService.store('lang', gCurrLang)
}

function getTransLang() {
    return gCurrLang
}