import { storageService } from "./storage.service";

export const i18Service = {
    doTrans,
    getTrans,
    setLang,
    getTransLang
}

var gTrans = {

    'Quarterly': {
        en: 'Quarterly',
        he: 'רבעון',
    },
    'quarterly': {
        en: 'quarterly',
        he: 'רבעון',
    },
    'List': {
        en: 'List',
        he: 'רשימה',
    },
    'group': {
        en: 'group',
        he: 'קבוצה',
    },
    'groups': {
        en: 'groups',
        he: 'קבוצות',
    },
    'sub-group': {
        en: 'sub-group',
        he: 'תת-קבוצה',
    },
    'order': {
        en: 'order',
        he: 'הזמנה',
    },
    'supplier groups': {
        en: 'supplier groups',
        he: 'קבוצת ספקים',
    },
    'item groups': {
        en: 'item groups',
        he: 'קבוצת פריטים',
    },
    'Close form': {
        en: 'Close form',
        he: 'סגור טופס',
    },
    'Add new bill': {
        en: 'Add new bill',
        he: 'הוסף חשבון',
    },
    'Department number': {
        en: 'Department number',
        he: 'מספר מחלקה',
    },
    'Reference number': {
        en: 'Reference number',
        he: 'אסמכתא',
    },
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
    'Supplier': {
        en: 'Supplier',
        he: 'ספק',
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
    'Name': {
        en: 'Name',
        he: 'שם',
    },
    'Quantity': {
        en: 'Quantity',
        he: 'כמות',
    },
    'quantity': {
        en: 'quantity',
        he: 'כמות',
    },
    'Price': {
        en: 'Price',
        he: 'מחיר',
    },
    'price': {
        en: 'price',
        he: 'מחיר',
    },
    'search': {
        en: 'search',
        he: 'חפש',
    },
    'read': {
        en: 'read',
        he: 'קרא',
    },
    'On': {
        en: 'On',
        he: 'על',
    },
    'RN': {
        en: 'RN',
        he: 'אסמכתא',
    },
    'Date': {
        en: 'Date',
        he: 'תאריך',
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
    "results": {
        en: "results",
        he: 'תוצאות',
    },
    "מזון (ללא ירקות ופירות)": {
        "en": "Food (excl. vegetables and fruit)",
        "he": "מזון (ללא ירקות ופירות)"
    },
    "לחם, דגנים ומוצרי בצק": {
        "en": "Bread, cereals and pastry products",
        "he": "לחם, דגנים ומוצרי בצק"
    },
    "לחם  אחיד שחור ולבן": {
        "en": "Standard bread",
        "he": "לחם  אחיד שחור ולבן"
    },
    "לחם פרוס": {
        "en": "Sliced bread",
        "he": "לחם פרוס"
    },
    "לחם מיוחד": {
        "en": "Special bread",
        "he": "לחם מיוחד"
    },
    "לחם קל ": {
        "en": "Light bread ",
        "he": "לחם קל "
    },
    "חלה רגילה ומתוקה": {
        "en": "Sabbath loaf, standard and sweet",
        "he": "חלה רגילה ומתוקה"
    },
    "לחמניות וכעכים": {
        "en": "Rolls and bagels",
        "he": "לחמניות וכעכים"
    },
    "פיתות": {
        "en": "Pitta (oriental bread)",
        "he": "פיתות"
    },
    "קמח לבן רגיל": {
        "en": "White flour",
        "he": "קמח לבן רגיל"
    },
    "קמח מלא, כוסמין, שיפון ואחר": {
        "en": "Whole wheat flour, spelt, rye and other",
        "he": "קמח מלא, כוסמין, שיפון ואחר"
    },
    "קורנפלור, קמח תפוחי אדמה וקמח מצות (3)": {
        "en": "Cornflour, potato flour, and matza flour (3)",
        "he": "קורנפלור, קמח תפוחי אדמה וקמח מצות (3)"
    },
    "קמח תופח ": {
        "en": "Self-raising flour ",
        "he": "קמח תופח "
    },
    "פירורי לחם ": {
        "en": "Bread crumbs",
        "he": "פירורי לחם "
    },
    "דגנים שונים": {
        "en": "Various cereals",
        "he": "דגנים שונים"
    },
    "כוסמת (4)": {
        "en": "Buckwheat (4)",
        "he": "כוסמת (4)"
    },
    "בורגול, קינואה, חיטה ודוחן (4)": {
        "en": "Wheat grouts, quinoa, wheat, and millet (4)",
        "he": "בורגול, קינואה, חיטה ודוחן (4)"
    },
    "שיבולת שועל (קוואקר)": {
        "en": "Oatmeal",
        "he": "שיבולת שועל (קוואקר)"
    },
    "קוסקוס ": {
        "en": "Couscous",
        "he": "קוסקוס "
    },
    "סולת ": {
        "en": "Semolina",
        "he": "סולת "
    },
    "אורז": {
        "en": "Rice",
        "he": "אורז"
    },
    "אורז מלא": {
        "en": "Brown rice",
        "he": "אורז מלא"
    },
    "עוגות": {
        "en": "Cakes",
        "he": "עוגות"
    },
    "עוגיות וביסקוויטים": {
        "en": "Cookies and biscuits",
        "he": "עוגיות וביסקוויטים"
    },
    "ופלים": {
        "en": "Wafers",
        "he": "ופלים"
    },
    "חטיף מלוח ": {
        "en": "Salty snacks",
        "he": "חטיף מלוח "
    },
    "חטיף בייגלה ": {
        "en": "Pretzels",
        "he": "חטיף בייגלה "
    },
    "לחם, דגנים ומוצרי בצק (המשך)": {
        "en": "Bread, cereals and pastry products (cont.)",
        "he": "לחם, דגנים ומוצרי בצק (המשך)"
    },
    "חטיף בוטנים ": {
        "en": "Peanut snacks ",
        "he": "חטיף בוטנים "
    },
    "חטיף תפוח אדמה ": {
        "en": "Potato snacks ",
        "he": "חטיף תפוח אדמה "
    },
    "קרקרים ": {
        "en": "Crackers",
        "he": "קרקרים "
    },
    "חטיפי בריאות ": {
        "en": "Healthy snacks",
        "he": "חטיפי בריאות "
    },
    "בצק קפוא ": {
        "en": "Frozen dough",
        "he": "בצק קפוא "
    },
    "מלאווח וג'חנון ": {
        "en": "Yemeni bread",
        "he": "מלאווח וג'חנון "
    },
    "מוצרי מאפה מבצק - קפואים (5)": {
        "en": "Pastry products, frozen (5)",
        "he": "מוצרי מאפה מבצק - קפואים (5)"
    },
    "פיצה קפואה (6)": {
        "en": "Frozen pizza (6)",
        "he": "פיצה קפואה (6)"
    },
    "רביולי (6)": {
        "en": "Ravioli (6)",
        "he": "רביולי (6)"
    },
    "מוצרי בצק לא קפואים (5)": {
        "en": "Pastry products, not frozen (5)",
        "he": "מוצרי בצק לא קפואים (5)"
    },
    "מוצרים אחרים מבצק ודגנים - קפואים (5)": {
        "en": "Other pastry and grain products, frozen (5) ",
        "he": "מוצרים אחרים מבצק ודגנים - קפואים (5)"
    },
    "אטריות ופסטה": {
        "en": "Noodles and pasta",
        "he": "אטריות ופסטה"
    },
    "דגני בוקר ": {
        "en": "Breakfast cereals ",
        "he": "דגני בוקר "
    },
    "שקדי מרק וקרוטונים ": {
        "en": "Soup mandels and croutons ",
        "he": "שקדי מרק וקרוטונים "
    },
    "פריכיות ": {
        "en": "Rice crispies",
        "he": "פריכיות "
    },
    "פופקורן": {
        "en": "Popcorn",
        "he": "פופקורן"
    },
    "שמנים צמחיים ומוצריהם": {
        "en": "Vegetable oils and their products",
        "he": "שמנים צמחיים ומוצריהם"
    },
    "שמן סויה": {
        "en": "Soybean oil",
        "he": "שמן סויה"
    },
    "שמן זית": {
        "en": "Olive oil",
        "he": "שמן זית"
    },
    "שמן חמניות (7)": {
        "en": "Sunflower oil (7)",
        "he": "שמן חמניות (7)"
    },
    "שמן קנולה ": {
        "en": "Canola oil ",
        "he": "שמן קנולה "
    },
    "שמן תירס (7)": {
        "en": "Corn oil (7)",
        "he": "שמן תירס (7)"
    },
    "שמן אחר ובצ\"נ (7)": {
        "en": "Other oil and n.e.c. (7)",
        "he": "שמן אחר ובצ\"נ (7)"
    },
    "מרגרינה": {
        "en": "Margarine",
        "he": "מרגרינה"
    },
    "מיונית, מיונז": {
        "en": "Mayonnaise",
        "he": "מיונית, מיונז"
    },
    "טחינה גולמית": {
        "en": "Tahina",
        "he": "טחינה גולמית"
    },
    "בשר ועופות": {
        "en": "Meat and poultry",
        "he": "בשר ועופות"
    },
    "בשר בקר (8)": {
        "en": "Beef (8)",
        "he": "בשר בקר (8)"
    },
    "בשר בקר טחון (9)": {
        "en": "Beef, minced (9)",
        "he": "בשר בקר טחון (9)"
    },
    "בשר כבש וגדי": {
        "en": "Lamb and goat meat",
        "he": "בשר כבש וגדי"
    },
    "כבד בקר וחלקים פנימיים": {
        "en": "Beef liver and internal parts",
        "he": "כבד בקר וחלקים פנימיים"
    },
    "עוף והודו שלם (10)": {
        "en": "Whole chicken and turkey (10)",
        "he": "עוף והודו שלם (10)"
    },
    "חזה עוף והודו": {
        "en": "Chicken and turkey breast",
        "he": "חזה עוף והודו"
    },
    "עוף והודו טחון": {
        "en": "Chicken and turkey, minced",
        "he": "עוף והודו טחון"
    },
    "כרעיים ושוקיים": {
        "en": "Chicken leg quarters",
        "he": "כרעיים ושוקיים"
    },
    "כבד עוף והודו": {
        "en": "Chicken and turkey liver",
        "he": "כבד עוף והודו"
    },
    "רולדה, שוורמה וחתיכות עוף והודו": {
        "en": "Meat roll, shwarma, chicken and turkey pieces",
        "he": "רולדה, שוורמה וחתיכות עוף והודו"
    },
    "חלקים אחרים של עוף והודו": {
        "en": "Other parts of chicken and turkey",
        "he": "חלקים אחרים של עוף והודו"
    },
    "נקניקים ופסטרמות (11)": {
        "en": "Sausage and pastrami (11)",
        "he": "נקניקים ופסטרמות (11)"
    },
    "נקניקיות": {
        "en": "Hot dogs",
        "he": "נקניקיות"
    },
    "מוצרי בשר ועוף קפואים": {
        "en": "Meat and poultry products, frozen",
        "he": "מוצרי בשר ועוף קפואים"
    },
    "דגים": {
        "en": "Fish",
        "he": "דגים"
    },
    "דגים שמגדלים בארץ (12)": {
        "en": "Fish, domestically grown (12)",
        "he": "דגים שמגדלים בארץ (12)"
    },
    "דגים שלא מגדלים בארץ (13)": {
        "en": "Fish, grown abroad (13)",
        "he": "דגים שלא מגדלים בארץ (13)"
    },
    "שימורי דגים": {
        "en": "Preserved fish",
        "he": "שימורי דגים"
    },
    "דגים מעובדים": {
        "en": "Processed fish",
        "he": "דגים מעובדים"
    },
    "ממרח דגים וסלט דגים": {
        "en": "Fish paste and fish salad",
        "he": "ממרח דגים וסלט דגים"
    },
    "מוצרי דגים מוכנים לבישול": {
        "en": "Ready to cook fish products",
        "he": "מוצרי דגים מוכנים לבישול"
    },
    "חלב ומוצריו, ביצים": {
        "en": "Milk, milk products and eggs",
        "he": "חלב ומוצריו, ביצים"
    },
    "חלב מפוסטר": {
        "en": "Pasteurized milk",
        "he": "חלב מפוסטר"
    },
    "חלב אחר": {
        "en": "Other milk",
        "he": "חלב אחר"
    },
    "משקה שוקו, קקאו וקפה": {
        "en": "Chocolate drink, cocoa and coffee",
        "he": "משקה שוקו, קקאו וקפה"
    },
    "חמאה": {
        "en": "Butter",
        "he": "חמאה"
    },
    "לבן ויוגורט": {
        "en": "Sour milk products and yogurt",
        "he": "לבן ויוגורט"
    },
    "מעדני חלב וגבינה": {
        "en": "Milk and cheese delicacies",
        "he": "מעדני חלב וגבינה"
    },
    "שמנת חמוצה": {
        "en": "Sour cream",
        "he": "שמנת חמוצה"
    },
    "שמנת מתוקה": {
        "en": "Sweet cream",
        "he": "שמנת מתוקה"
    },
    "גבינה צהובה קשה": {
        "en": "Hard cheese",
        "he": "גבינה צהובה קשה"
    },
    "גבינה מותכת": {
        "en": "Processed cheese",
        "he": "גבינה מותכת"
    },
    "גבינה לבנה": {
        "en": "Soft white cheese",
        "he": "גבינה לבנה"
    },
    "גבינת קוטג' ": {
        "en": "Cottage cheese ",
        "he": "גבינת קוטג' "
    },
    "גבינה מלוחה": {
        "en": "Brined cheese",
        "he": "גבינה מלוחה"
    },
    "גלידות ושלגונים": {
        "en": "Ice cream and popsicles",
        "he": "גלידות ושלגונים"
    },
    "ביצים": {
        "en": "Eggs",
        "he": "ביצים"
    },
    "ביצים אורגניות ": {
        "en": "Organic eggs ",
        "he": "ביצים אורגניות "
    },
    "סוכר ומוצריו": {
        "en": "Sugar and sugar products",
        "he": "סוכר ומוצריו"
    },
    "סוכר": {
        "en": "Sugar",
        "he": "סוכר"
    },
    "תחליפי סוכר": {
        "en": "Sugar substitutes ",
        "he": "תחליפי סוכר"
    },
    "ריבה ומרקחת": {
        "en": "Jam and confiture",
        "he": "ריבה ומרקחת"
    },
    "דבש": {
        "en": "Honey",
        "he": "דבש"
    },
    "סוכריות": {
        "en": "Candies ",
        "he": "סוכריות"
    },
    "חלבה": {
        "en": "Halvah",
        "he": "חלבה"
    },
    "שוקולד ובונבוניירות": {
        "en": "Chocolate and chocolate-boxes",
        "he": "שוקולד ובונבוניירות"
    },
    "מוצרי מתיקה אחרים": {
        "en": "Other sweets",
        "he": "מוצרי מתיקה אחרים"
    },
    "ממרח שוקולד וממרח קקאו": {
        "en": "Chocolate spread and cocoa spread",
        "he": "ממרח שוקולד וממרח קקאו"
    },
    "ממרחים מפירות יבשים": {
        "en": "Dried fruit spreads",
        "he": "ממרחים מפירות יבשים"
    },
    "סילאן  (2)": {
        "en": "Date honey (2)",
        "he": "סילאן  (2)"
    },
    "ממרחים מתוקים אחרים  (2)": {
        "en": "Other sweet spreads (2)",
        "he": "ממרחים מתוקים אחרים  (2)"
    },
    "משקאות קלים": {
        "en": "Soft drinks",
        "he": "משקאות קלים"
    },
    "מי סודה ": {
        "en": "Soda water",
        "he": "מי סודה "
    },
    "בירה שחורה": {
        "en": "Malt beer",
        "he": "בירה שחורה"
    },
    "משקאות קלים לא תוססים": {
        "en": "Soft drinks, non-carbonated",
        "he": "משקאות קלים לא תוססים"
    },
    "משקאות קלים תוססים": {
        "en": "Soft drinks, carbonated",
        "he": "משקאות קלים תוססים"
    },
    "מים מינרליים": {
        "en": "Mineral water",
        "he": "מים מינרליים"
    },
    "תרכיזים ממותקים": {
        "en": "Sweet concentrates",
        "he": "תרכיזים ממותקים"
    },
    "משקאות אנרגיה ": {
        "en": "Energy drinks",
        "he": "משקאות אנרגיה "
    },
    "משקאות אלכוהוליים": {
        "en": "Alcoholic beverages",
        "he": "משקאות אלכוהוליים"
    },
    "יין": {
        "en": "Wine",
        "he": "יין"
    },
    "בירה לבנה": {
        "en": "Beer",
        "he": "בירה לבנה"
    },
    "וודקה ": {
        "en": "Vodka",
        "he": "וודקה "
    },
    "ברנדי, ליקר, קוניאק ומשקאות ": {
        "en": "Brandy, liqueur, cognac and other",
        "he": "ברנדי, ליקר, קוניאק ומשקאות "
    },
    "   אלכוהליים אחרים": {
        "en": "   alcoholic beverages",
        "he": "   אלכוהליים אחרים"
    },
    "ארוחות מחוץ לבית": {
        "en": "Meals away from home",
        "he": "ארוחות מחוץ לבית"
    },
    "בעבודה ": {
        "en": "At work",
        "he": "בעבודה "
    },
    "במסעדות ": {
        "en": "At restaurants ",
        "he": "במסעדות "
    },
    "בבתי קפה": {
        "en": "At coffee shops",
        "he": "בבתי קפה"
    },
    "בקיוסקים ומזנונים": {
        "en": "At kiosks and cafeterias",
        "he": "בקיוסקים ומזנונים"
    },
    "בפאבים ": {
        "en": "At pubs",
        "he": "בפאבים "
    },
    "במסעדות מזון מהיר ": {
        "en": "At fast food restaurants",
        "he": "במסעדות מזון מהיר "
    },
    "מוצרי מזון שונים": {
        "en": "Miscellaneous food products",
        "he": "מוצרי מזון שונים"
    },
    "תה": {
        "en": "Tea",
        "he": "תה"
    },
    "קפה": {
        "en": "Regular coffee",
        "he": "קפה"
    },
    "קפה נמס": {
        "en": "Instant coffee",
        "he": "קפה נמס"
    },
    "אבקת קקאו": {
        "en": "Cocoa powder",
        "he": "אבקת קקאו"
    },
    "מלח": {
        "en": "Salt",
        "he": "מלח"
    },
    "מוצרי מזון שונים (המשך)": {
        "en": "Miscellaneous food products (cont.)",
        "he": "מוצרי מזון שונים (המשך)"
    },
    "מוצרי עזר לאפייה": {
        "en": "Baking materials",
        "he": "מוצרי עזר לאפייה"
    },
    "רטבים מוכנים לפסטה ולסלט ": {
        "en": "Prepared sauces for pasta and salad",
        "he": "רטבים מוכנים לפסטה ולסלט "
    },
    "חומץ ": {
        "en": "Vinegar",
        "he": "חומץ "
    },
    "חרדל ": {
        "en": "Mustard ",
        "he": "חרדל "
    },
    "קטשופ ": {
        "en": "Ketchup ",
        "he": "קטשופ "
    },
    "תבלינים": {
        "en": "Spices",
        "he": "תבלינים"
    },
    "פרג, שומשום, קוקוס ": {
        "en": "Poppy seed, sesame seed and minced coconut ",
        "he": "פרג, שומשום, קוקוס "
    },
    "אבקות מרק ורטבים": {
        "en": "Powdered soup and sauces",
        "he": "אבקות מרק ורטבים"
    },
    "אבקת פודינג, ג'לטין": {
        "en": "Pudding mix, gelatin",
        "he": "אבקת פודינג, ג'לטין"
    },
    "גומי לעיסה": {
        "en": "Chewing gum",
        "he": "גומי לעיסה"
    },
    "מזון לתינוקות": {
        "en": "Baby formula",
        "he": "מזון לתינוקות"
    },
    "רסק פירות וירקות לתינוק": {
        "en": "Baby fruit and vegetable puree",
        "he": "רסק פירות וירקות לתינוק"
    },
    "שעועית יבשה": {
        "en": "Beans, dried",
        "he": "שעועית יבשה"
    },
    "גרגירי חומוס": {
        "en": "Chick-peas",
        "he": "גרגירי חומוס"
    },
    "קטניות יבשות אחרות (14)": {
        "en": "Other dry pulses (14)",
        "he": "קטניות יבשות אחרות (14)"
    },
    "פול יבש ועדשים (14)": {
        "en": "Dry fava beans and lentils (14)",
        "he": "פול יבש ועדשים (14)"
    },
    "תבשיל באריזה (לא קפוא)": {
        "en": "Instant meals (not frozen)",
        "he": "תבשיל באריזה (לא קפוא)"
    },
    "הזמנת אוכל הביתה ": {
        "en": "Food Home delivery ",
        "he": "הזמנת אוכל הביתה "
    },
    "אוכל מוכן טרי לבית": {
        "en": "Fresh ready made food",
        "he": "אוכל מוכן טרי לבית"
    },
    "גרנולה ": {
        "en": "Granola ",
        "he": "גרנולה "
    },
    "תחליפי בשר ומוצרי צמחונות": {
        "en": "Meat substitutes and vegetarian products",
        "he": "תחליפי בשר ומוצרי צמחונות"
    },
    "תחליפי חלב וגבינה (15)": {
        "en": "Cheese or milk substitutes (15)",
        "he": "תחליפי חלב וגבינה (15)"
    },
    "קפסולות קפה ": {
        "en": "Coffee capsules ",
        "he": "קפסולות קפה "
    },
    "חלב קוקוס, קרם קוקוס ומי קוקוס ": {
        "en": "Coconut milk, coconut cream and coconut water",
        "he": "חלב קוקוס, קרם קוקוס ומי קוקוס "
    },
    "חלב שקדים  ": {
        "en": "Almond milk ",
        "he": "חלב שקדים  "
    },
    "ירקות ופירות": {
        "en": "Vegetables and fruit",
        "he": "ירקות ופירות"
    },
    "תפוחי אדמה ובטטות": {
        "en": "Potatoes and sweet potatoes",
        "he": "תפוחי אדמה ובטטות"
    },
    "ירקות טריים": {
        "en": "Vegetables, fresh",
        "he": "ירקות טריים"
    },
    "בצל יבש ובצל ירוק": {
        "en": "Onions and scallions",
        "he": "בצל יבש ובצל ירוק"
    },
    "שום": {
        "en": "Garlic",
        "he": "שום"
    },
    "גזר": {
        "en": "Carrots",
        "he": "גזר"
    },
    "חסה": {
        "en": "Lettuce",
        "he": "חסה"
    },
    "חצילים": {
        "en": "Eggplants",
        "he": "חצילים"
    },
    "כרוב": {
        "en": "Cabbage",
        "he": "כרוב"
    },
    "כרובית": {
        "en": "Cauliflower",
        "he": "כרובית"
    },
    "מלפפונים": {
        "en": "Cucumbers",
        "he": "מלפפונים"
    },
    "סלק": {
        "en": "Beetroot",
        "he": "סלק"
    },
    "עגבניות": {
        "en": "Tomatoes",
        "he": "עגבניות"
    },
    "פלפל וגמבה": {
        "en": "Green and red peppers ",
        "he": "פלפל וגמבה"
    },
    "פלפל חריף": {
        "en": "Hot peppers",
        "he": "פלפל חריף"
    },
    "צנון וצנונית": {
        "en": "Radishes ",
        "he": "צנון וצנונית"
    },
    "קישואים": {
        "en": "Squash",
        "he": "קישואים"
    },
    "קלחי תירס": {
        "en": "Corn cobs",
        "he": "קלחי תירס"
    },
    "שעועית טרייה": {
        "en": "Fresh beans",
        "he": "שעועית טרייה"
    },
    "פטריות טריות   ": {
        "en": "Fresh mushrooms  ",
        "he": "פטריות טריות   "
    },
    "דלעת  ": {
        "en": "Pumpkin  ",
        "he": "דלעת  "
    },
    "קולרבי (כרוב הקלח) ": {
        "en": "Kohlrabi ",
        "he": "קולרבי (כרוב הקלח) "
    },
    "ברוקולי, פול, במיה וירקות אחרים": {
        "en": "Broccoli, fava beans, okra and other vegetables",
        "he": "ברוקולי, פול, במיה וירקות אחרים"
    },
    "ירקות לתיבול כולל ירקות שורש ועלים (16)": {
        "en": "Seasoning greens, incl. root and leafy vegetables (16)",
        "he": "ירקות לתיבול כולל ירקות שורש ועלים (16)"
    },
    "פטרוזיליה ": {
        "en": "Parsley ",
        "he": "פטרוזיליה "
    },
    "כוסברה ": {
        "en": "Coriander ",
        "he": "כוסברה "
    },
    "נבטים ": {
        "en": "Sprouts",
        "he": "נבטים "
    },
    "ירקות חתוכים לסלט ": {
        "en": "Cut vegetables for salad ",
        "he": "ירקות חתוכים לסלט "
    },
    "נענע ": {
        "en": "Mint ",
        "he": "נענע "
    },
    "שמיר ": {
        "en": "Dill ",
        "he": "שמיר "
    },
    "סלרי, כולל שורש סלרי": {
        "en": "Celery including celery root ",
        "he": "סלרי, כולל שורש סלרי"
    },
    "תרד, מנגולד ועלי סלק ": {
        "en": "Spinach, chard and beet leaves ",
        "he": "תרד, מנגולד ועלי סלק "
    },
    "פירות טריים": {
        "en": "Fruit, fresh",
        "he": "פירות טריים"
    },
    "תפוזים": {
        "en": "Oranges",
        "he": "תפוזים"
    },
    "קלמנטינות ומנדרינות": {
        "en": "Tangerines and mandarines",
        "he": "קלמנטינות ומנדרינות"
    },
    "אשכוליות ": {
        "en": "Grapefruits",
        "he": "אשכוליות "
    },
    "פירות טריים (המשך)": {
        "en": "Fruit, fresh (cont.)",
        "he": "פירות טריים (המשך)"
    },
    "לימונים": {
        "en": "Lemons",
        "he": "לימונים"
    },
    "אבוקדו": {
        "en": "Avocados",
        "he": "אבוקדו"
    },
    "אבטיחים": {
        "en": "Watermelons",
        "he": "אבטיחים"
    },
    "אגסים": {
        "en": "Pears",
        "he": "אגסים"
    },
    "אפרסקים, נקטרינה (אפרשזיף)": {
        "en": "Peaches, nectarines",
        "he": "אפרסקים, נקטרינה (אפרשזיף)"
    },
    "בננות": {
        "en": "Bananas",
        "he": "בננות"
    },
    "מלונים": {
        "en": "Sugar melons",
        "he": "מלונים"
    },
    "משמש": {
        "en": "Apricots",
        "he": "משמש"
    },
    "ענבים": {
        "en": "Grapes",
        "he": "ענבים"
    },
    "רימונים ": {
        "en": "Pomegranate ",
        "he": "רימונים "
    },
    "שזיפים": {
        "en": "Plums",
        "he": "שזיפים"
    },
    "תות שדה": {
        "en": "Strawberries",
        "he": "תות שדה"
    },
    "תפוחי עץ": {
        "en": "Apples",
        "he": "תפוחי עץ"
    },
    "אפרסמון": {
        "en": "Persimmons",
        "he": "אפרסמון"
    },
    "מנגו": {
        "en": "Mangos",
        "he": "מנגו"
    },
    "פירות טריים אחרים (2)": {
        "en": "Other fresh fruits (2)",
        "he": "פירות טריים אחרים (2)"
    },
    "קיווי   ": {
        "en": "Kiwi ",
        "he": "קיווי   "
    },
    "פמלה": {
        "en": "Pomelo ",
        "he": "פמלה"
    },
    "תאנים טריות": {
        "en": "Fresh figs",
        "he": "תאנים טריות"
    },
    "תמרים טריים": {
        "en": "Fresh  dates ",
        "he": "תמרים טריים"
    },
    "דובדבנים": {
        "en": "Cherries ",
        "he": "דובדבנים"
    },
    "גויבה ": {
        "en": "Guava ",
        "he": "גויבה "
    },
    "ירקות קפואים": {
        "en": "Vegetables, frozen",
        "he": "ירקות קפואים"
    },
    "מוצרי תפו\"א קפואים": {
        "en": "Potato products, frozen",
        "he": "מוצרי תפו\"א קפואים"
    },
    "לקט ירקות קפואים": {
        "en": "Frozen vegetables - mixed ",
        "he": "לקט ירקות קפואים"
    },
    "ירקות קפואים בודדים": {
        "en": "Frozen vegetables - single ",
        "he": "ירקות קפואים בודדים"
    },
    "ירקות כבושים ומשומרים": {
        "en": "Vegetables, pickled and canned",
        "he": "ירקות כבושים ומשומרים"
    },
    "שימורי אפונה גזר ": {
        "en": "Canned peas and carrots",
        "he": "שימורי אפונה גזר "
    },
    "שימורי תירס ושעועית ": {
        "en": "Canned beans and corn ",
        "he": "שימורי תירס ושעועית "
    },
    "שימורי פטריות ": {
        "en": "Canned mushrooms ",
        "he": "שימורי פטריות "
    },
    "שימורי ירקות אחרים (17)": {
        "en": "Other canned vegetables (17)",
        "he": "שימורי ירקות אחרים (17)"
    },
    "מלפפונים כבושים": {
        "en": "Pickled cucumbers",
        "he": "מלפפונים כבושים"
    },
    "זיתים": {
        "en": "Olives",
        "he": "זיתים"
    },
    "ירקות כבושים אחרים ": {
        "en": "Other pickled vegetables ",
        "he": "ירקות כבושים אחרים "
    },
    "רסק עגבניות (17)": {
        "en": "Tomato puree (17)",
        "he": "רסק עגבניות (17)"
    },
    "ממרחים צמחוניים (2)": {
        "en": "Vegetarian spreads (2)",
        "he": "ממרחים צמחוניים (2)"
    },
    "סלט חומוס ": {
        "en": "Humus salad ",
        "he": "סלט חומוס "
    },
    "סלט טחינה ": {
        "en": "Tehina salad ",
        "he": "סלט טחינה "
    },
    "סלט חצילים ": {
        "en": "Eggplant salad",
        "he": "סלט חצילים "
    },
    "סלט כרוב ": {
        "en": "Cabbage salad ",
        "he": "סלט כרוב "
    },
    "סחוג ": {
        "en": "Skhug",
        "he": "סחוג "
    },
    "סלט תורכי, סלט מטבוחה ": {
        "en": "Turkish salad, tomato salad",
        "he": "סלט תורכי, סלט מטבוחה "
    },
    "סלטים מוכנים אחרים ": {
        "en": "Other prepared salads ",
        "he": "סלטים מוכנים אחרים "
    },
    "פירות משומרים וקפואים": {
        "en": "Fruit, preserved and frozen",
        "he": "פירות משומרים וקפואים"
    },
    "פירות יבשים": {
        "en": "Fruit, dried",
        "he": "פירות יבשים"
    },
    "תמרים": {
        "en": "Dates",
        "he": "תמרים"
    },
    "צימוקים": {
        "en": "Raisins",
        "he": "צימוקים"
    },
    "תאנים ושזיפים": {
        "en": "Figs and prunes",
        "he": "תאנים ושזיפים"
    },
    "פירות יבשים אחרים ": {
        "en": "Other dried fruit ",
        "he": "פירות יבשים אחרים "
    },
    "זירעונים לפיצוח": {
        "en": "Roasted seeds",
        "he": "זירעונים לפיצוח"
    },
    "אגוזים": {
        "en": "Nuts",
        "he": "אגוזים"
    },
    "שקדים": {
        "en": "Almonds",
        "he": "שקדים"
    },
    "בוטנים": {
        "en": "Peanuts",
        "he": "בוטנים"
    },
    "בוטנים אמריקאיים (2)": {
        "en": "Coated peanuts (2)",
        "he": "בוטנים אמריקאיים (2)"
    },
    "פיסטוקים ": {
        "en": "Pistachio",
        "he": "פיסטוקים "
    },
    "חמוציות ": {
        "en": "Cranberries",
        "he": "חמוציות "
    },
    "פיצוחים בצ\"נ": {
        "en": "Other mixed nuts n.e.c.",
        "he": "פיצוחים בצ\"נ"
    },
    "מיצי פירות טבעיים": {
        "en": "Fruit juices, natural",
        "he": "מיצי פירות טבעיים"
    },
    "דיור": {
        "en": "Housing",
        "he": "דיור"
    },
    "מיסים ממשלתיים": {
        "en": "Government taxes",
        "he": "מיסים ממשלתיים"
    },
    "שכר דירה חודשי": {
        "en": "Monthly rent",
        "he": "שכר דירה חודשי"
    },
    "שכ\"ד לדירה או חדר בשכר חודשי": {
        "en": "For rented dwelling or room",
        "he": "שכ\"ד לדירה או חדר בשכר חודשי"
    },
    "צריכת שירותי דיור": {
        "en": "Consumption of housing services",
        "he": "צריכת שירותי דיור"
    },
    "לדירה בבעלות": {
        "en": "For owned dwelling",
        "he": "לדירה בבעלות"
    },
    "לדירה בדמי מפתח או דיור חינם": {
        "en": "For key money dwelling or free housing ",
        "he": "לדירה בדמי מפתח או דיור חינם"
    },
    "הוצאות דיור אחרות": {
        "en": "Other housing expenditures",
        "he": "הוצאות דיור אחרות"
    },
    "תשלום לעו\"ד ולמתווך עבור קנייה,": {
        "en": "Payment to lawyer/real estate agent for buying, ",
        "he": "תשלום לעו\"ד ולמתווך עבור קנייה,"
    },
    "   מכירה או שכירת דירה": {
        "en": "   selling or renting a dwelling ",
        "he": "   מכירה או שכירת דירה"
    },
    "ביטוח דירה ותכולתה": {
        "en": "Insurance on dwelling and contents",
        "he": "ביטוח דירה ותכולתה"
    },
    "תחזוקת הדירה ומשק הבית": {
        "en": "Dwelling and household maintenance",
        "he": "תחזוקת הדירה ומשק הבית"
    },
    "מים": {
        "en": "Water",
        "he": "מים"
    },
    "חשמל, גז ודלק לבית": {
        "en": "Electricity, gas and fuel for dwelling",
        "he": "חשמל, גז ודלק לבית"
    },
    "חשמל, צריכה שוטפת": {
        "en": "Electricity, current consumption",
        "he": "חשמל, צריכה שוטפת"
    },
    "גז במכלים": {
        "en": "Gas in containers",
        "he": "גז במכלים"
    },
    "גז מרכזי": {
        "en": "Gas, central installation",
        "he": "גז מרכזי"
    },
    "הוצאות הסקה וחימום (כולל נפט)": {
        "en": "Heating expenses (incl. kerosene)",
        "he": "הוצאות הסקה וחימום (כולל נפט)"
    },
    "תחזוקה ושיפור הבית": {
        "en": "Maintenance and renovation",
        "he": "תחזוקה ושיפור הבית"
    },
    "תשלום לצבע, לשיפוצניק, לסייד ": {
        "en": "Payment for painter, handyman",
        "he": "תשלום לצבע, לשיפוצניק, לסייד "
    },
    "תשלום לשרברב ": {
        "en": "Payment for plumber ",
        "he": "תשלום לשרברב "
    },
    "תשלום לחשמלאי ": {
        "en": "Payment for electrician",
        "he": "תשלום לחשמלאי "
    },
    "תשלום לבעלי מלאכה אחרים (18)": {
        "en": "Payments for other maintenance (18)",
        "he": "תשלום לבעלי מלאכה אחרים (18)"
    },
    "תשלומים לוועד הבית": {
        "en": "Buidling committee fees",
        "he": "תשלומים לוועד הבית"
    },
    "כלי עבודה וחומרים לתחזוקת הדירה (19)": {
        "en": "Tools and materials for dwelling maintenance (19)",
        "he": "כלי עבודה וחומרים לתחזוקת הדירה (19)"
    },
    "עזרה בבית": {
        "en": "Domestic help",
        "he": "עזרה בבית"
    },
    "מטפלת בבית המשפחה": {
        "en": "Caregiver at the family's home",
        "he": "מטפלת בבית המשפחה"
    },
    "עוזרת בית ומבשלת": {
        "en": "Domestic help and cook",
        "he": "עוזרת בית ומבשלת"
    },
    "מטפל/ת סיעודי/ת בבית (2)": {
        "en": "Nursing caregiver at home (2)",
        "he": "מטפל/ת סיעודי/ת בבית (2)"
    },
    "צורכי משק בית שונים": {
        "en": "Miscellaneous household articles",
        "he": "צורכי משק בית שונים"
    },
    "אבקת כביסה": {
        "en": "Laundry detergent",
        "he": "אבקת כביסה"
    },
    "חומרי כביסה אחרים": {
        "en": "Other laundry products",
        "he": "חומרי כביסה אחרים"
    },
    "חומרי חיטוי וניקוי לבית (20)": {
        "en": "Disinfectants and house cleaning materials (20)",
        "he": "חומרי חיטוי וניקוי לבית (20)"
    },
    "חומרי ניקוי לכלים": {
        "en": "Dishwashing materials",
        "he": "חומרי ניקוי לכלים"
    },
    "אמצעי ניקוי אחרים": {
        "en": "Other cleaning materials",
        "he": "אמצעי ניקוי אחרים"
    },
    "סופגי ריחות ומטהרי אוויר": {
        "en": "Deodorizers and air freshners",
        "he": "סופגי ריחות ומטהרי אוויר"
    },
    "נרות": {
        "en": "Candles",
        "he": "נרות"
    },
    "מטליות וסמרטוטים לרצפה": {
        "en": "Dust cloths and floor mops",
        "he": "מטליות וסמרטוטים לרצפה"
    },
    "צורכי משק בית שונים (21)": {
        "en": "Various household articles (21)",
        "he": "צורכי משק בית שונים (21)"
    },
    "שקיות נשיאה חד פעמיות ": {
        "en": "Disposable bags",
        "he": "שקיות נשיאה חד פעמיות "
    },
    "שקיות רב פעמיות (2)": {
        "en": "Multi-use bags (2)",
        "he": "שקיות רב פעמיות (2)"
    },
    "נייר אפיה ": {
        "en": "Baking paper",
        "he": "נייר אפיה "
    },
    "שקיות אוכל ": {
        "en": "Sandwich bags",
        "he": "שקיות אוכל "
    },
    "פחמים ומדליק פחמים (2)": {
        "en": "Charcoal and charcoal lighter (2)",
        "he": "פחמים ומדליק פחמים (2)"
    },
    "רדיד אלומיניום ": {
        "en": "Aluminium foil",
        "he": "רדיד אלומיניום "
    },
    "שקיות אשפה ": {
        "en": "Garbage bags",
        "he": "שקיות אשפה "
    },
    "כפפות לניקוי ": {
        "en": "Cleaning gloves ",
        "he": "כפפות לניקוי "
    },
    "מיסים עירוניים": {
        "en": "Municipal property taxes",
        "he": "מיסים עירוניים"
    },
    "ארנונה ": {
        "en": "Municipal  property taxes ",
        "he": "ארנונה "
    },
    "מיסי יישוב (22) ": {
        "en": "Municipal taxes (22) ",
        "he": "מיסי יישוב (22) "
    },
    "אגרת שמירה": {
        "en": "Guarding fee ",
        "he": "אגרת שמירה"
    },
    "ריהוט וציוד לבית": {
        "en": "Furniture and household equipment",
        "he": "ריהוט וציוד לבית"
    },
    "ריהוט": {
        "en": "Furniture",
        "he": "ריהוט"
    },
    "ריהוט לסלון": {
        "en": "Living room furniture",
        "he": "ריהוט לסלון"
    },
    "ריהוט לחדר שינה ": {
        "en": "Bedroom furniture",
        "he": "ריהוט לחדר שינה "
    },
    "ריהוט  וציוד לתינוק": {
        "en": "Baby room furniture and equipment",
        "he": "ריהוט  וציוד לתינוק"
    },
    "ריהוט למטבח ולפינת אוכל (23)": {
        "en": "Kitchen and dining room furniture (23)",
        "he": "ריהוט למטבח ולפינת אוכל (23)"
    },
    "ריהוט לגן ולמרפסת": {
        "en": "Outdoor furniture",
        "he": "ריהוט לגן ולמרפסת"
    },
    "ציוד חשמלי לבית": {
        "en": "Household electrical equipment",
        "he": "ציוד חשמלי לבית"
    },
    "מקרר ומקפיא ": {
        "en": "Refrigerator and deep freezer",
        "he": "מקרר ומקפיא "
    },
    "קומקום חשמלי ": {
        "en": "Electric kettle",
        "he": "קומקום חשמלי "
    },
    "תנור, מיקרוגל  וקולט אדים (24)": {
        "en": "Stove, microwave, and ventilation hood (24)",
        "he": "תנור, מיקרוגל  וקולט אדים (24)"
    },
    "ציוד חשמלי אחר למטבח (25)": {
        "en": "Other electric kitchen appliances (25)",
        "he": "ציוד חשמלי אחר למטבח (25)"
    },
    "מגהץ, שואב אבק, מייבש ומכונת כביסה (2)": {
        "en": "Iron, vacuum cleaner, dryer and washing machine (2)",
        "he": "מגהץ, שואב אבק, מייבש ומכונת כביסה (2)"
    },
    "נורות ": {
        "en": "Bulbs",
        "he": "נורות "
    },
    "ציוד חשמלי לבית (המשך)": {
        "en": "Household electrical equipment (cont.)",
        "he": "ציוד חשמלי לבית (המשך)"
    },
    "מנורות, נברשות ואהילים ": {
        "en": "Lamps, chandeliers and lamp shades",
        "he": "מנורות, נברשות ואהילים "
    },
    "שירות ותיקון ציוד חשמלי לבית": {
        "en": "Service and repairs of home electrical equipment",
        "he": "שירות ותיקון ציוד חשמלי לבית"
    },
    "תיקון מוצרי חשמל למטבח ": {
        "en": "Repair of kitchen appliances ",
        "he": "תיקון מוצרי חשמל למטבח "
    },
    "ביטוח ציוד חשמלי לבית ": {
        "en": "Home electrical equipment insurance",
        "he": "ביטוח ציוד חשמלי לבית "
    },
    "תחזוקת מכשיר לטיהור מים ": {
        "en": "Water purifier maintenance",
        "he": "תחזוקת מכשיר לטיהור מים "
    },
    "מערכת מיזוג, מזגן ומאוורר ": {
        "en": "Air conditioning system, air conditioner and fan",
        "he": "מערכת מיזוג, מזגן ומאוורר "
    },
    "תנור חימום נייד (כולל לחדר רחצה)": {
        "en": "Portable heater (Including for bathroom)",
        "he": "תנור חימום נייד (כולל לחדר רחצה)"
    },
    "ציוד לא חשמלי": {
        "en": "Non-electrical equipment",
        "he": "ציוד לא חשמלי"
    },
    "מברשות בית ומטאטאים": {
        "en": "Brooms and brushes",
        "he": "מברשות בית ומטאטאים"
    },
    "סכו\"ם ": {
        "en": "Cutlery ",
        "he": "סכו\"ם "
    },
    "צלחות ותחתיות": {
        "en": "Plates and saucers",
        "he": "צלחות ותחתיות"
    },
    "ספלים, כוסות וכוסיות": {
        "en": "Mugs, glasses and small cups",
        "he": "ספלים, כוסות וכוסיות"
    },
    "צלחות, כוסות וסכו\"ם חד פעמיים": {
        "en": "Disposable plates, cups and cutlery",
        "he": "צלחות, כוסות וסכו\"ם חד פעמיים"
    },
    "כלי בישול ואפייה ": {
        "en": "Cooking and baking utensils",
        "he": "כלי בישול ואפייה "
    },
    "מגשים, כלי הגשה וכלי קיבול ": {
        "en": "Trays, serving dishes and storage containers",
        "he": "מגשים, כלי הגשה וכלי קיבול "
    },
    "כלי מטבח אחרים (26)": {
        "en": "Other kitchen utensils (26) ",
        "he": "כלי מטבח אחרים (26)"
    },
    "כלי מיטה ומגבות": {
        "en": "Bedding and towels",
        "he": "כלי מיטה ומגבות"
    },
    "כסתות, שמיכות, כרים וכריות": {
        "en": "Quilts, blankets, pillows and cushions",
        "he": "כסתות, שמיכות, כרים וכריות"
    },
    "מצעים": {
        "en": "Sheets",
        "he": "מצעים"
    },
    "מזרן (2)": {
        "en": "Mattress (2)",
        "he": "מזרן (2)"
    },
    "מגבות רחצה ": {
        "en": "Bath towels",
        "he": "מגבות רחצה "
    },
    "מגבות מטבח": {
        "en": "Kitchen towels",
        "he": "מגבות מטבח"
    },
    "חפצי קישוט לבית": {
        "en": "Home decoration",
        "he": "חפצי קישוט לבית"
    },
    "תמונות, מראות וחפצי קישוט אחרים": {
        "en": "Pictures, mirrors and other decorations",
        "he": "תמונות, מראות וחפצי קישוט אחרים"
    },
    "שטיחים ושטיחונים": {
        "en": "Carpets",
        "he": "שטיחים ושטיחונים"
    },
    "וילונות": {
        "en": "Curtains",
        "he": "וילונות"
    },
    "מפות שולחן מבד ": {
        "en": "Tablecloths",
        "he": "מפות שולחן מבד "
    },
    "מפיות (בד ונייר) ומפות חד פעמיות": {
        "en": "Napkins (cloth and paper), disposable tablecloths",
        "he": "מפיות (בד ונייר) ומפות חד פעמיות"
    },
    "פרחים וצמחים": {
        "en": "Flowers and plants",
        "he": "פרחים וצמחים"
    },
    "הלבשה והנעלה": {
        "en": "Clothing and footwear",
        "he": "הלבשה והנעלה"
    },
    "הלבשה עליונה לגברים": {
        "en": "Men's outerwear",
        "he": "הלבשה עליונה לגברים"
    },
    "חליפה ומעיל לגבר ": {
        "en": "Men's suit and overcoat",
        "he": "חליפה ומעיל לגבר "
    },
    "מכנסיים": {
        "en": "Children's pants",
        "he": "מכנסיים"
    },
    "סוודר או אפודה ": {
        "en": "Sweater or sleeveless pullover ",
        "he": "סוודר או אפודה "
    },
    "חולצה": {
        "en": "Blouse, shirt",
        "he": "חולצה"
    },
    "אימונית לגבר": {
        "en": "Men's track suit",
        "he": "אימונית לגבר"
    },
    "הלבשה עליונה לנשים": {
        "en": "Women's outerwear",
        "he": "הלבשה עליונה לנשים"
    },
    "חליפה ומעיל לאישה": {
        "en": "Women's suit and overcoat",
        "he": "חליפה ומעיל לאישה"
    },
    "שמלה": {
        "en": "Dress",
        "he": "שמלה"
    },
    "חצאית": {
        "en": "Skirt",
        "he": "חצאית"
    },
    "סוודר, אפודה": {
        "en": "Sweater, sleeveless pullover",
        "he": "סוודר, אפודה"
    },
    "חולצה לאישה": {
        "en": "Blouse",
        "he": "חולצה לאישה"
    },
    "אימונית לאישה": {
        "en": "Women's track suit",
        "he": "אימונית לאישה"
    },
    "הלבשה עליונה לילדים ותינוקות": {
        "en": "Children's and babies' outerwear",
        "he": "הלבשה עליונה לילדים ותינוקות"
    },
    "חליפה ומעיל לילדים ": {
        "en": "Children's suit and coat",
        "he": "חליפה ומעיל לילדים "
    },
    "אימונית ילדים": {
        "en": "Children's track suit",
        "he": "אימונית ילדים"
    },
    "חולצות בית ספר (2)": {
        "en": "School unifor shirts (2)",
        "he": "חולצות בית ספר (2)"
    },
    "שמלה וחצאית": {
        "en": "Dress and skirt ",
        "he": "שמלה וחצאית"
    },
    "בגדים לתינוקות": {
        "en": "Baby clothes",
        "he": "בגדים לתינוקות"
    },
    "לבנים, בגדי שינה וגרביים": {
        "en": "Underwear, sleepwear and socks",
        "he": "לבנים, בגדי שינה וגרביים"
    },
    "גופייה ותחתונים לגבר ": {
        "en": "Men's underwear",
        "he": "גופייה ותחתונים לגבר "
    },
    "גרביים לגבר ": {
        "en": "Men's socks",
        "he": "גרביים לגבר "
    },
    "לבנים ובגדי שינה לאישה": {
        "en": "Women's underwear and nightdress",
        "he": "לבנים ובגדי שינה לאישה"
    },
    "גרביים וגרבונים לאישה ": {
        "en": "Women's socks and  hosiery ",
        "he": "גרביים וגרבונים לאישה "
    },
    "גופייה ותחתונים לילדים": {
        "en": "Children's underwear",
        "he": "גופייה ותחתונים לילדים"
    },
    "גרביים לילדים ": {
        "en": "Children's socks",
        "he": "גרביים לילדים "
    },
    "צורכי הלבשה שונים": {
        "en": "Miscellaneous clothing articles",
        "he": "צורכי הלבשה שונים"
    },
    "כובעים, מגבעות, צעיפים ומטפחות": {
        "en": "Hats, hoods, scarves and kerchiefs",
        "he": "כובעים, מגבעות, צעיפים ומטפחות"
    },
    "בגדי ספורט (2)": {
        "en": "Sports wear (2)",
        "he": "בגדי ספורט (2)"
    },
    "תפירה, אריגים וחומרי עזר": {
        "en": "Sewing, fabrics and accessories",
        "he": "תפירה, אריגים וחומרי עזר"
    },
    "ניקוי וכביסה מחוץ לבית": {
        "en": "Cleaning and laundry outside home",
        "he": "ניקוי וכביסה מחוץ לבית"
    },
    "הנעלה": {
        "en": "Footwear",
        "he": "הנעלה"
    },
    "נעליים וסנדלים לגבר": {
        "en": "Men's shoes and sandals",
        "he": "נעליים וסנדלים לגבר"
    },
    "נעליים וסנדלים לאישה": {
        "en": "Women's shoes and sandals",
        "he": "נעליים וסנדלים לאישה"
    },
    "נעליים וסנדלים לילדים": {
        "en": "Children's shoes and sandals",
        "he": "נעליים וסנדלים לילדים"
    },
    "נעלי ספורט ": {
        "en": "Sport shoes",
        "he": "נעלי ספורט "
    },
    "מגפיים": {
        "en": "Boots ",
        "he": "מגפיים"
    },
    "נעלי בית ": {
        "en": "Slippers ",
        "he": "נעלי בית "
    },
    "בריאות": {
        "en": "Health",
        "he": "בריאות"
    },
    "ביטוח בריאות": {
        "en": "Health insurance",
        "he": "ביטוח בריאות"
    },
    "ביטוח משלים בקופת חולים": {
        "en": "Health funds complementary insurance",
        "he": "ביטוח משלים בקופת חולים"
    },
    "ביטוח בריאות בחברת ביטוח": {
        "en": "Health insurance in insurance company",
        "he": "ביטוח בריאות בחברת ביטוח"
    },
    "ביטוח סיעודי": {
        "en": "Long-term care insurance ",
        "he": "ביטוח סיעודי"
    },
    "ביטוח בריאות אחר": {
        "en": "Other health insurance ",
        "he": "ביטוח בריאות אחר"
    },
    "ריפוי שיניים": {
        "en": "Dental treatment",
        "he": "ריפוי שיניים"
    },
    "טיפולי שיניים ": {
        "en": "Dental treatment",
        "he": "טיפולי שיניים "
    },
    "הוצאות אחרות לשיניים (28)": {
        "en": "Other dental expenditures (28)",
        "he": "הוצאות אחרות לשיניים (28)"
    },
    "ביטוח שיניים": {
        "en": "Dental insurance",
        "he": "ביטוח שיניים"
    },
    "הוצאות על שירותי בריאות": {
        "en": "Expenditures on health services",
        "he": "הוצאות על שירותי בריאות"
    },
    "תשלומים לרופא פרטי או ": {
        "en": "Fees for private physician or ",
        "he": "תשלומים לרופא פרטי או "
    },
    "מקצועי בקופ\"ח ": {
        "en": " specialist at Health funds",
        "he": "מקצועי בקופ\"ח "
    },
    "בדיקות מעבדה וצילומים ": {
        "en": "Lab tests and x-rays",
        "he": "בדיקות מעבדה וצילומים "
    },
    "טיפולים רפואיים ואלטרנטיביים": {
        "en": "Medical and alternative treatments",
        "he": "טיפולים רפואיים ואלטרנטיביים"
    },
    "אחות פרטית, אמבולנס": {
        "en": "Private nurse, ambulance and",
        "he": "אחות פרטית, אמבולנס"
    },
    "    וחדר מיון ": {
        "en": "   emergency room ",
        "he": "    וחדר מיון "
    },
    "טיפול פסיכולוגי או פסיכיאטרי": {
        "en": "Psychological or psychiatric treatment",
        "he": "טיפול פסיכולוגי או פסיכיאטרי"
    },
    "טיפולים שיקומיים והתפתחותיים": {
        "en": "Rehabilitation and developmental treatments",
        "he": "טיפולים שיקומיים והתפתחותיים"
    },
    "ניתוחים וטיפולים אסתטיים פרטיים ": {
        "en": "Private aesthetic surgery and treatments ",
        "he": "ניתוחים וטיפולים אסתטיים פרטיים "
    },
    "הוצאות אחרות לבריאות": {
        "en": "Other expenditures on health",
        "he": "הוצאות אחרות לבריאות"
    },
    "תרופות בקופת חולים": {
        "en": "Medications through Health funds",
        "he": "תרופות בקופת חולים"
    },
    "תרופות בבית מרקחת ": {
        "en": "Medications from pharmacies",
        "he": "תרופות בבית מרקחת "
    },
    "תרופות ללא מקום קנייה": {
        "en": "Medications with unknown purchase place",
        "he": "תרופות ללא מקום קנייה"
    },
    "צמר גפן, טמפונים ותחבושות": {
        "en": "Cotton-wool, tampons and bandages",
        "he": "צמר גפן, טמפונים ותחבושות"
    },
    "חומרי רפואה אחרים (29)": {
        "en": "Other medical items (29)",
        "he": "חומרי רפואה אחרים (29)"
    },
    "משקפיים ועדשות מגע ": {
        "en": "Glasses and contact lenses",
        "he": "משקפיים ועדשות מגע "
    },
    "ויטמינים ללא מרשם רופא": {
        "en": "Non-prescription vitamins ",
        "he": "ויטמינים ללא מרשם רופא"
    },
    "מכשירי שיקום או ציוד רפואי ": {
        "en": "Rehabilitation aids or medical equipment ",
        "he": "מכשירי שיקום או ציוד רפואי "
    },
    "מוצרים לבריאות הפה והשיניים ": {
        "en": "Dental and oral hygiene products ",
        "he": "מוצרים לבריאות הפה והשיניים "
    },
    "חינוך, תרבות ובידור": {
        "en": "Education, culture and entertainment",
        "he": "חינוך, תרבות ובידור"
    },
    "שירותי חינוך": {
        "en": "Education services",
        "he": "שירותי חינוך"
    },
    "מטפלת בביתה בבעלות פרטית": {
        "en": "Privately owned day care",
        "he": "מטפלת בביתה בבעלות פרטית"
    },
    "מעון יום, פעוטון, גן": {
        "en": "Private kindergarten",
        "he": "מעון יום, פעוטון, גן"
    },
    "גן חובה וטרום חובה": {
        "en": "Compulsory and pre-compulosry kindergarten",
        "he": "גן חובה וטרום חובה"
    },
    "בית ספר יסודי": {
        "en": "Primary schools",
        "he": "בית ספר יסודי"
    },
    "חטיבת ביניים": {
        "en": "Lower secondary schools",
        "he": "חטיבת ביניים"
    },
    "בית ספר תיכון עיוני": {
        "en": "General secondary schools",
        "he": "בית ספר תיכון עיוני"
    },
    "בית ספר על-תיכון ": {
        "en": "Post-secondary schools ",
        "he": "בית ספר על-תיכון "
    },
    "ישיבה גדולה": {
        "en": "High Yeshiva",
        "he": "ישיבה גדולה"
    },
    "מוסד אקדמי (כולל האוניברסיטה הפתוחה)": {
        "en": "Academic institutions (incl. The Open University)",
        "he": "מוסד אקדמי (כולל האוניברסיטה הפתוחה)"
    },
    "החזקת קרובים במוסדות חינוך (2)": {
        "en": "Tuition for relatives in educational institutions (2)",
        "he": "החזקת קרובים במוסדות חינוך (2)"
    },
    "צהרון או מועדונית לילדים": {
        "en": "Afternoon care for children",
        "he": "צהרון או מועדונית לילדים"
    },
    "שיעורי עזר לתלמידים": {
        "en": "Special tutoring for pupils",
        "he": "שיעורי עזר לתלמידים"
    },
    "קורסים במחול וריקוד ": {
        "en": "Dancing lessons and courses",
        "he": "קורסים במחול וריקוד "
    },
    "קורסים במוזיקה ונגינה ": {
        "en": "Music lessons and courses ",
        "he": "קורסים במוזיקה ונגינה "
    },
    "שיעורים וקורסים לציור, ": {
        "en": "Painting, sculpture and photography",
        "he": "שיעורים וקורסים לציור, "
    },
    "   פיסול וצילום": {
        "en": " lessons and courses",
        "he": "   פיסול וצילום"
    },
    "חוגי התעמלות וכושר ": {
        "en": "Sports and exercise lessons",
        "he": "חוגי התעמלות וכושר "
    },
    "חוג שחייה ": {
        "en": "Swimming class",
        "he": "חוג שחייה "
    },
    "חוגי כדור כגון כדורגל, כדורסל ": {
        "en": "Soccer, basketball and other ball classes",
        "he": "חוגי כדור כגון כדורגל, כדורסל "
    },
    "חוג אמנויות לחימה ": {
        "en": "Martial arts class",
        "he": "חוג אמנויות לחימה "
    },
    "קורסים ללימוד שפות": {
        "en": "Language courses",
        "he": "קורסים ללימוד שפות"
    },
    "חוגים וקורסים אחרים (30)": {
        "en": "Other lessons and courses (30)",
        "he": "חוגים וקורסים אחרים (30)"
    },
    "ספרי לימוד ": {
        "en": "Textbooks ",
        "he": "ספרי לימוד "
    },
    "מחברות ": {
        "en": "Notebooks ",
        "he": "מחברות "
    },
    "כלים  לכתיבה, שרטוט וציור ": {
        "en": "Writing and drawing supplies ",
        "he": "כלים  לכתיבה, שרטוט וציור "
    },
    "מעטפות, נייר וציוד כתיבה אחר ": {
        "en": "Envelopes, paper, and other writing supplies ",
        "he": "מעטפות, נייר וציוד כתיבה אחר "
    },
    "עיתונים, ספרים ומכשירי כתיבה": {
        "en": "Newspapers, books and stationery",
        "he": "עיתונים, ספרים ומכשירי כתיבה"
    },
    "עיתון יומי": {
        "en": "Daily newspaper",
        "he": "עיתון יומי"
    },
    "מינוי לעיתון יומי": {
        "en": "Subscription to daily newspaper",
        "he": "מינוי לעיתון יומי"
    },
    "מינוי לכתבי עת ופרסומים": {
        "en": "Subscription to periodicals and publications",
        "he": "מינוי לכתבי עת ופרסומים"
    },
    "ספרים אחרים": {
        "en": "Other books",
        "he": "ספרים אחרים"
    },
    "אירועי תרבות, ספורט ובידור": {
        "en": "Cultural, sport and entertainment events",
        "he": "אירועי תרבות, ספורט ובידור"
    },
    "כרטיסי קולנוע ומופעי תרבות": {
        "en": "Tickets for cinema and cultural events (2)",
        "he": "כרטיסי קולנוע ומופעי תרבות"
    },
    "מינוי למועדון חברה, ספורט, בריכה": {
        "en": "Membership in a social club, health club or swimming pool",
        "he": "מינוי למועדון חברה, ספורט, בריכה"
    },
    "עריכת אירועים (קייטרינג, אולם)": {
        "en": "Additional expenses for holding events (2)",
        "he": "עריכת אירועים (קייטרינג, אולם)"
    },
    "הוצאות נוספות לעריכת אירועים": {
        "en": "Other expenditures on celebrations",
        "he": "הוצאות נוספות לעריכת אירועים"
    },
    "דמי חבר לארגונים חברתיים ": {
        "en": "Social organization fees ",
        "he": "דמי חבר לארגונים חברתיים "
    },
    "ביקור במוזיאונים ותערוכות (2)": {
        "en": "Museum and exhibition fees (2)",
        "he": "ביקור במוזיאונים ותערוכות (2)"
    },
    "מינוי לאתרי אינטרנט ": {
        "en": "Subscriptions for websites ",
        "he": "מינוי לאתרי אינטרנט "
    },
    "הבראה, נופש וטיולים": {
        "en": "Recreation and excursions",
        "he": "הבראה, נופש וטיולים"
    },
    "בתי מלון": {
        "en": "Hotels",
        "he": "בתי מלון"
    },
    "לינה כפרית ": {
        "en": "Rural tourism",
        "he": "לינה כפרית "
    },
    "שהייה במקומות נופש אחרים": {
        "en": "Other recreation places",
        "he": "שהייה במקומות נופש אחרים"
    },
    "קייטנה לילדים, מחנה קיץ": {
        "en": "Summer camp for children",
        "he": "קייטנה לילדים, מחנה קיץ"
    },
    "כניסה לאתרים ": {
        "en": "Entrance to sites ",
        "he": "כניסה לאתרים "
    },
    "שייט, ג'יפים, רכיבה ואקסטרים (2)": {
        "en": "Sailing, off-road vehicles, horseback riding and extreme activities (2)",
        "he": "שייט, ג'יפים, רכיבה ואקסטרים (2)"
    },
    "כניסה לפארקי שעשועים ומים (2)": {
        "en": "Entrance fees to amusement and water parks (2)",
        "he": "כניסה לפארקי שעשועים ומים (2)"
    },
    "כניסה למשחקייה וחדר בריחה (2)": {
        "en": "Entrance fees to gimbories and escape rooms (2)",
        "he": "כניסה למשחקייה וחדר בריחה (2)"
    },
    "כניסה לגני חיות (2)": {
        "en": "Entrace fees to zoos (2)",
        "he": "כניסה לגני חיות (2)"
    },
    "מוצרי תרבות ובידור בני קיימה": {
        "en": "Entertainment durable goods",
        "he": "מוצרי תרבות ובידור בני קיימה"
    },
    "קניית ותיקון כלי נגינה ": {
        "en": "Musical instruments ",
        "he": "קניית ותיקון כלי נגינה "
    },
    "אוזניות ": {
        "en": "Earphones ",
        "he": "אוזניות "
    },
    "טלוויזיה ": {
        "en": "Television",
        "he": "טלוויזיה "
    },
    "מינוי לטלוויזיה בכבלים או בלוויין  (31)": {
        "en": "Subscription to cable TV or satellite TV (31)",
        "he": "מינוי לטלוויזיה בכבלים או בלוויין  (31)"
    },
    "תחביבים, ציוד ספורט ומחנאות": {
        "en": "Hobbies, sports and camping equipment",
        "he": "תחביבים, ציוד ספורט ומחנאות"
    },
    "קניית חיות והוצאות אחזקתן": {
        "en": "Buying pets and expenses for their care",
        "he": "קניית חיות והוצאות אחזקתן"
    },
    "מזון לחיות מחמד": {
        "en": "Pet food",
        "he": "מזון לחיות מחמד"
    },
    "צעצועים": {
        "en": "Toys",
        "he": "צעצועים"
    },
    "משחקים": {
        "en": "Games",
        "he": "משחקים"
    },
    "פיס, טוטו, לוטו וכו'": {
        "en": "Lotteries",
        "he": "פיס, טוטו, לוטו וכו'"
    },
    "מינוי לכרטיס הגרלה של מפעל הפיס": {
        "en": "Subscription to lottery",
        "he": "מינוי לכרטיס הגרלה של מפעל הפיס"
    },
    "דמי כיס": {
        "en": "Pocket money",
        "he": "דמי כיס"
    },
    "צורכי דת": {
        "en": "Religious articles",
        "he": "צורכי דת"
    },
    "מחשב, אינטרנט ומוצריהם": {
        "en": "Computer, Internet and their products",
        "he": "מחשב, אינטרנט ומוצריהם"
    },
    "מחשב": {
        "en": "Computer",
        "he": "מחשב"
    },
    "אביזרי מחשב": {
        "en": "Computer accesories",
        "he": "אביזרי מחשב"
    },
    "תוכנות, משחקי מחשב ותקליטורים": {
        "en": "Software, computer games and CD-ROM ",
        "he": "תוכנות, משחקי מחשב ותקליטורים"
    },
    "דיו למדפסת  ": {
        "en": "Printer ink",
        "he": "דיו למדפסת  "
    },
    "טאבלט ": {
        "en": "Tablet",
        "he": "טאבלט "
    },
    "שדרוג ותיקון מחשב  ": {
        "en": "Upgrade and computer repairs ",
        "he": "שדרוג ותיקון מחשב  "
    },
    "תחבורה ותקשורת": {
        "en": "Transport and communications",
        "he": "תחבורה ותקשורת"
    },
    "נסיעה בתחבורה ציבורית": {
        "en": "Public transport",
        "he": "נסיעה בתחבורה ציבורית"
    },
    "נסיעה באוטובוס": {
        "en": "Transport by bus",
        "he": "נסיעה באוטובוס"
    },
    "נסיעה במונית שירות": {
        "en": "Transport by service taxi",
        "he": "נסיעה במונית שירות"
    },
    "נסיעה במונית מיוחדת": {
        "en": "Transport by special taxi",
        "he": "נסיעה במונית מיוחדת"
    },
    "נסיעה ברכבת ": {
        "en": "Transport by train ",
        "he": "נסיעה ברכבת "
    },
    "נסיעה לחוץ לארץ": {
        "en": "Travel abroad",
        "he": "נסיעה לחוץ לארץ"
    },
    "טיול מאורגן לחוץ לארץ": {
        "en": "Organized tour abroad",
        "he": "טיול מאורגן לחוץ לארץ"
    },
    "טיול אחר לחוץ לארץ": {
        "en": "Other travel abroad",
        "he": "טיול אחר לחוץ לארץ"
    },
    "הוצאות שהייה בחוץ לארץ": {
        "en": "Expenditures on stay abroad ",
        "he": "הוצאות שהייה בחוץ לארץ"
    },
    "ביטוח נסיעות לחוץ לארץ ": {
        "en": "Travel insurance abroad",
        "he": "ביטוח נסיעות לחוץ לארץ "
    },
    "הוצאות לכלי רכב": {
        "en": "Expenditures on vehicles",
        "he": "הוצאות לכלי רכב"
    },
    "אופניים (2)": {
        "en": "Bicycles (2)",
        "he": "אופניים (2)"
    },
    "רישיון למכונית": {
        "en": "Car registration",
        "he": "רישיון למכונית"
    },
    "ביטוח חובה למכונית": {
        "en": "Compulsory auto insurance",
        "he": "ביטוח חובה למכונית"
    },
    "ביטוח מקיף למכונית": {
        "en": "Comprehensive auto insurance",
        "he": "ביטוח מקיף למכונית"
    },
    "ביטוח צד שלישי למכונית": {
        "en": "Third party auto insurance",
        "he": "ביטוח צד שלישי למכונית"
    },
    "דלק ושמנים לכלי רכב": {
        "en": "Fuel and lubricants for vehicles",
        "he": "דלק ושמנים לכלי רכב"
    },
    "טיפול תקופתי": {
        "en": "Periodic maintenance",
        "he": "טיפול תקופתי"
    },
    "תיקונים אחרים לרכב": {
        "en": "Other car repairs",
        "he": "תיקונים אחרים לרכב"
    },
    "קניית מכונית ": {
        "en": "Buying a car ",
        "he": "קניית מכונית "
    },
    "קניית רכב ותשלום חודשי בליסינג פרטי ": {
        "en": "Buying a car and monthly payments for private leasing",
        "he": "קניית רכב ותשלום חודשי בליסינג פרטי "
    },
    "רחיצת מכונית ": {
        "en": "Car wash",
        "he": "רחיצת מכונית "
    },
    "שירותי צריכה למכונית שאינה בבעלות": {
        "en": "Consumer services for unowned car",
        "he": "שירותי צריכה למכונית שאינה בבעלות"
    },
    "זקיפת הוצאות לרכב שאינו בבעלות": {
        "en": "Imputed expenses on unowned car ",
        "he": "זקיפת הוצאות לרכב שאינו בבעלות"
    },
    "מינוי למערכת איתור לרכב ": {
        "en": "Subscription for car locator systems ",
        "he": "מינוי למערכת איתור לרכב "
    },
    "הוצאות לרכב דו גלגלי (2) (32) ": {
        "en": "Expenses on two-wheel vehicle (2) (32)",
        "he": "הוצאות לרכב דו גלגלי (2) (32) "
    },
    "הוצאות אחרות": {
        "en": "Other expenditures",
        "he": "הוצאות אחרות"
    },
    "שיעורי נהיגה": {
        "en": "Driving lessons",
        "he": "שיעורי נהיגה"
    },
    "העברת תכולת דירה ": {
        "en": "Moving of dwelling's content",
        "he": "העברת תכולת דירה "
    },
    "הובלות והוצאות אחרות ": {
        "en": "Freight and other expenses ",
        "he": "הובלות והוצאות אחרות "
    },
    "תשלום עבור חנייה": {
        "en": "Parking fees",
        "he": "תשלום עבור חנייה"
    },
    "שירותי דואר, טלפון ותקשורת": {
        "en": "Postal services, telephone and communications",
        "he": "שירותי דואר, טלפון ותקשורת"
    },
    "טלפון רגיל, חשבון שוטף": {
        "en": "Telephone, current account",
        "he": "טלפון רגיל, חשבון שוטף"
    },
    "טלפון נייד, חשבון שוטף": {
        "en": "Mobile phone, current account",
        "he": "טלפון נייד, חשבון שוטף"
    },
    "קניית טלפון נייד ": {
        "en": "Mobile phone, purchase",
        "he": "קניית טלפון נייד "
    },
    "תיקונים ומוצרים נלווים לטלפון (2)": {
        "en": "Repair and sccessories for phone (2)",
        "he": "תיקונים ומוצרים נלווים לטלפון (2)"
    },
    "מינוי לאינטרנט ": {
        "en": "Internet subscription ",
        "he": "מינוי לאינטרנט "
    },
    "מוצרים ושירותים אחרים": {
        "en": "Miscellaneous goods and services",
        "he": "מוצרים ושירותים אחרים"
    },
    "סיגריות, טבק וצורכי עישון": {
        "en": "Cigarettes, tobacco and accessories",
        "he": "סיגריות, טבק וצורכי עישון"
    },
    "סיגריות": {
        "en": "Cigarettes",
        "he": "סיגריות"
    },
    "שירותים אישיים וקוסמטיקה": {
        "en": "Persona services and cosmetics",
        "he": "שירותים אישיים וקוסמטיקה"
    },
    "תספורת לגברים וילדים (33)": {
        "en": "Men's and children's haircuts (33)",
        "he": "תספורת לגברים וילדים (33)"
    },
    "תספורת לנשים": {
        "en": "Women's hairdressing",
        "he": "תספורת לנשים"
    },
    "טיפול קוסמטי": {
        "en": "Cosmetic treatments",
        "he": "טיפול קוסמטי"
    },
    "מוצרים אישיים וקוסמטיקה": {
        "en": "Personal articles and cosmetics",
        "he": "מוצרים אישיים וקוסמטיקה"
    },
    "סבון רחצה": {
        "en": "Bath soap",
        "he": "סבון רחצה"
    },
    "תכשירים לשיער": {
        "en": "Hair products",
        "he": "תכשירים לשיער"
    },
    "כלי גילוח ומשחת גילוח": {
        "en": "Shaving accessories and shaving cream",
        "he": "כלי גילוח ומשחת גילוח"
    },
    "מוצרי קוסמטיקה ואיפור (כולל אחרים)": {
        "en": "Cosmetics and make-up (including other items)",
        "he": "מוצרי קוסמטיקה ואיפור (כולל אחרים)"
    },
    "נייר טואלט": {
        "en": "Toilet paper",
        "he": "נייר טואלט"
    },
    "ממחטות (נייר, בד)": {
        "en": "Handkerchiefs (paper, linen)",
        "he": "ממחטות (נייר, בד)"
    },
    "תשרים": {
        "en": "Gratuities",
        "he": "תשרים"
    },
    "אביזרים לשיער (2)": {
        "en": "Hair accessories (2)",
        "he": "אביזרים לשיער (2)"
    },
    "מסיכות לפנים - בד ונייר ": {
        "en": "Hygenic masks - fabric and paper ",
        "he": "מסיכות לפנים - בד ונייר "
    },
    "שירותים משפטיים ואחרים": {
        "en": "Legal and other services",
        "he": "שירותים משפטיים ואחרים"
    },
    "עורך דין לייצוג או תביעה בבית המשפט ": {
        "en": "Attorney for representation or claim in court ",
        "he": "עורך דין לייצוג או תביעה בבית המשפט "
    },
    "  כולל טוען דתי ": {
        "en": "  inc. Religious Claimer ",
        "he": "  כולל טוען דתי "
    },
    "עורך דין לעניינים מינהליים -": {
        "en": "An attorney for administrative issues -",
        "he": "עורך דין לעניינים מינהליים -"
    },
    "  ירושה, צוואה ": {
        "en": "   inheritance, wills",
        "he": "  ירושה, צוואה "
    },
    "אדריכל, מהנדס ומעצב פנים": {
        "en": "Architect, engineer and interior decorator ",
        "he": "אדריכל, מהנדס ומעצב פנים"
    },
    "תכשיטים ושעונים": {
        "en": "Jewellery and watches",
        "he": "תכשיטים ושעונים"
    },
    "טבעות (34)": {
        "en": "Rings  (34)",
        "he": "טבעות (34)"
    },
    "עגילים (34)": {
        "en": "Earrings (34)",
        "he": "עגילים (34)"
    },
    "שרשראות (34)": {
        "en": "Necklaces (34)",
        "he": "שרשראות (34)"
    },
    "צמידים (34)": {
        "en": "Bracelets (34)",
        "he": "צמידים (34)"
    },
    "שעוני יד ": {
        "en": "Watches",
        "he": "שעוני יד "
    },
    "שעון חכם ": {
        "en": "Smart watch ",
        "he": "שעון חכם "
    },
    "ארנקים, תיקים, מזוודות ומוצרים לתינוק": {
        "en": "Wallets, bags, suitcases and baby products",
        "he": "ארנקים, תיקים, מזוודות ומוצרים לתינוק"
    },
    "תיקים, תרמילים וילקוטים": {
        "en": "School bags and satchels",
        "he": "תיקים, תרמילים וילקוטים"
    },
    "מוצרים לתינוקות  ": {
        "en": "Baby products  ",
        "he": "מוצרים לתינוקות  "
    },
    "מגבונים לחים ": {
        "en": "Pre-moistened towelettes",
        "he": "מגבונים לחים "
    },
    "חיתולים (כל הסוגים) ": {
        "en": "Diapers (all kinds) ",
        "he": "חיתולים (כל הסוגים) "
    },
    "מיסי ארגון ותרומות": {
        "en": "Organization dues and donations",
        "he": "מיסי ארגון ותרומות"
    },
    "תרומות למפעלים ומוסדות": {
        "en": "Donations to organizations and institutions",
        "he": "תרומות למפעלים ומוסדות"
    },
    "מס חבר להסתדרות, ארגון מקצועי, ": {
        "en": "Membership dues to Histadrut, professional",
        "he": "מס חבר להסתדרות, ארגון מקצועי, "
    },
    " ועד עובדים": {
        "en": " organization, and workers committee",
        "he": " ועד עובדים"
    },
    "סעיפי  חיסכון נבחרים": {
        "en": "Selected savings items",
        "he": "סעיפי  חיסכון נבחרים"
    },
    "פרמיות לביטוח חיים מצטבר": {
        "en": "Cumulative life insurance premiums",
        "he": "פרמיות לביטוח חיים מצטבר"
    },
    "תשלומים לקופת גמל": {
        "en": "Payments to provident funds",
        "he": "תשלומים לקופת גמל"
    },
    "תשלומים לקרנות השתלמות": {
        "en": "Payments to training funds",
        "he": "תשלומים לקרנות השתלמות"
    },
    "תשלומים לביטוח מנהלים": {
        "en": "Payments to managers insurance",
        "he": "תשלומים לביטוח מנהלים"
    },
    "תשלומים לקרן פנסיה": {
        "en": "Payments to pension fund",
        "he": "תשלומים לקרן פנסיה"
    },
    "פירעון משכנתאות (קרן+ריבית)": {
        "en": "Mortgage payments (principal+interest)",
        "he": "פירעון משכנתאות (קרן+ריבית)"
    },
    "שיפוצים, שינויים והשקעות בדירה": {
        "en": "Renovations and Investments in dwelling",
        "he": "שיפוצים, שינויים והשקעות בדירה"
    }
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
    gCurrLang = lang
    // console.log(lang);
    if (lang === 'he') document.body.classList.add('rtl')
    else document.body.classList.remove('rtl')
    storageService.store('lang', gCurrLang)
}

function getTransLang() {
    return gCurrLang
}