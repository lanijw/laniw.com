export function downloadableFileName(lead, sourceProgram, date) {
  const year = formatDatePart(date.getFullYear());
  const month = formatDatePart((date.getMonth() + 1));
  const day = formatDatePart(date.getDate());
  const hours = formatDatePart(date.getHours());
  const minutes = formatDatePart(date.getMinutes());
  const seconds = formatDatePart(date.getSeconds());
  return `${lead}${lead === "" ?
    "" :
    "_"}${sourceProgram}_${year}-${month}-${day}_${hours}-${minutes}-${seconds}.json`;
}

function formatDatePart(num) {
  const numString = num.toString();
  return numString.length > 1 ? numString : "0" + numString;
}