export const utilsService = {
    setDate,
    transformYear,
    formCheck,
    priceSum,
    toLocal,
    getLast24Months,
    makeId
}

function setDate(inputDate) {
    const dateParts = inputDate.split("-");
    const year = dateParts[0].slice(-2); // Extract the last two digits of the year
    const month = dateParts[1];
    const day = dateParts[2];
    return `${day}.${month}.${year}`;
}

function transformYear(date) {
    let dateParts = date.split('-');
    let year = dateParts[0];

    if (year.startsWith('00')) {
        year = '20' + year.substring(2);
        dateParts[0] = year;
        return dateParts.join('-');
    } else {
        return date;
    }
}

function checkIfEqual(form, lines) {
    var total = lines.reduce((acc, item) => acc + ((item.price * item.quantity) - (item.discount || 0)), 0) - (form.discount || 0)
    // var total = lines.reduce((acc, item) => acc + item.total, 0) - (form.discount || 0)
    return (((+form.total - +total) <= 1) && (+form.total - +total >= -1))
}

function formCheck(form, lines) {
    var msg
    lines.forEach(line => {
        if (!line._id && (line.price || line.quantity)) msg = 'half empty line'
    })
    if (!form.supplier._id) msg = 'Supplier requierd'
    else if (!checkIfEqual(form, lines)) msg = 'Total not equal!'
    else if (!form.date) msg = 'date requierd'
    // else if (!form["reference-number"]) msg = 'reference number requierd'
    return msg
}

function toLocal(array) {
    return array?.toLocaleString('he-IL', { style: 'currency', currency: 'ILS' })
}

function priceSum(array, local, bill) {
    var sum = array?.reduce((acc, item) => acc + ((item.price * item.quantity) - (item?.discount || 0)), 0) - (bill?.discount || 0)
    return local ? toLocal(sum) : sum
}

function getLast24Months() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() - 1

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const months = [];
    let monthCount = currentMonth;
    let yearCount = currentYear;

    for (let i = 0; i < 12; i++) {
        const month = monthCount % 12;
        const year = yearCount - Math.floor(monthCount / 12);

        months.unshift({ year, month: monthNames[month], number: month + 1 });

        monthCount--;
        if (monthCount < 0) {
            monthCount = 11;
            yearCount--;
        }
    }

    const groups = [];
    let currentGroup = [];
    let groupCount = 0;

    for (let i = 0; i < months.length; i++) {
        currentGroup.push(months[i]);

        if ((i + 1) % 3 === 0 || i === months.length - 1) {
            groups.unshift(currentGroup);
            currentGroup = [];
            groupCount++;
        }
    }

    return groups;
}

function makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}