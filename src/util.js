import {dev} from "$app/env";

export function downloadableFileName(lead, sourceProgram, date) {
  const year = formatDatePart(date.getFullYear());
  const month = formatDatePart(date.getMonth() + 1);
  const day = formatDatePart(date.getDate());
  const hours = formatDatePart(date.getHours());
  const minutes = formatDatePart(date.getMinutes());
  const seconds = formatDatePart(date.getSeconds());
  return `${lead}${
    lead === "" ? "" : "_"
  }${sourceProgram}_${year}-${month}-${day}_${hours}-${minutes}-${seconds}.json`;
}

function formatDatePart(num) {
  const numString = num.toString();
  return numString.length > 1 ? numString : "0" + numString;
}

/**
 * Updates url parameters silently.
 *
 * @param {string} url Url to set.
 */
export function updateUrl(url) {
  window.history.replaceState({}, "", url);
}

/**
 * Returns full url with given parameter values.
 *
 * @param    {string[][]}    parameters    Parameter values to set.
 */
export function replaceUrlParams(parameters) {
  const protocol = window.location.protocol;
  const host = window.location.host;
  const pathname = window.location.pathname;

  const params = new URLSearchParams(parameters);

  return `${protocol}//${host}${pathname}${
    parameters.length === 0 ? "" : "?"
  }${params.toString()}`;
}

export function getUrlParams() {
  const urlParams = window.location.search;
  return new URLSearchParams(urlParams);
}
