export const utilsService = {
    setDate
}

function setDate(inputDate) {
    const dateParts = inputDate.split("-");
    const year = dateParts[0].slice(-2); // Extract the last two digits of the year
    const month = dateParts[1];
    const day = dateParts[2];
    return `${day}.${month}.${year}`;
}