const API_METHODS = {
  DELETE: "DELETE",
  GET: "GET",
  PATCH: "PATCH",
  POST: "POST",
  PUT: "PUT",
};


const TOAST_TYPE = {
  ERROR: "error",
  WARNING: "warning",
  SUCCESS: "success",
  INFO: "info",
};




const CURRENCY_FORMAT = {
  indian: 2,
  foreign: 3,
};

const DATE_FORMAT_TYPE = {
  FULL_DATE_SLASH_FORMAT: "DD/MM/YYYY", //eg. 23/11/2022
  FULL_DATE_SLASH_FORMAT_WITH_DAY: "DD/MM/YYYY, ddd", //eg. 01/01/2011, Sat
  FULL_DATE_DASHED_FORMAT: "DD-MM-YYYY", //eg. 23-11-2022
  FULL_DATE_REVERSE_DASHED_FORMAT: "YYYY-MM-DD", //eg. 2022-11-23
  FULL_DATE_SHORT_MONTH_SPACED_FORMAT: "DD MMM YYYY", //eg. 25 Jan 2023
  FULL_DATE_SLASHED_12_HR_FORMAT: "DD/MM/YYYY h:mmA", //eg. 23/11/2022 12:34PM
  FULL_DATE_MONTH_FIRST: "MMMM DD, YYYY", //eg. January 17, 2023
  FULL_DATE_MONTH_FIRST_12_HR_FORMAT: "MMMM DD, YYYY hh:mm A", //eg. January 01, 2011 05:30 AM
  FULL_DATE_SLASHED_24_HR_FORMAT: "DD/MM/YYYY HH:mm", //eg. 11/11/2001 12:40
  FULL_DATE_DOT_FORMAT: "DD.MM.YYYY", //eg. 11.11.2001
  FULL_DATE_SHORT_MONTH_DATE_YEAR_SPACED_FORMAT: "MMM DD YYYY", //eg. Jan 25 2023
  FULL_DATE_SHORT_MONTH_DATE_YEAR_TIME_SPACED_FORMAT: "DD MMM YYYY, HH:mm", //eg. 25 Jan 2023, 12:40
  FULL_DATE_SHORT_MONTH_FIRST: "MMM DD, YYYY", //eg. Jan 17, 2023
  FULL_DATE_12_HR_TIME_FIRST: "hh:mm A, Do MMMM YYYY", //eg. 05:30 AM, 1st January 2011
  FULL_DATE_SHORT_MONTH_NUMBER_DATE: "Do MMM, YYYY", //eg. 11th Nov, 2001
  FULL_DATE_SHORT_MONTH_NUMBER_DATE_WITH_TIME: "Do MMM, YYYY h:mmA", //eg. 5:30AM 1st Jan, 2011
};



const TIME_DROPDOWN_OPTIONS = [
  { title: "1", value: 1 },
  { title: "2", value: 2 },
  { title: "3", value: 3 },
  { title: "4", value: 4 },
  { title: "5", value: 5 },
  { title: "6", value: 6 },
  { title: "7", value: 7 },
  { title: "8", value: 8 },
  { title: "9", value: 9 },
  { title: "10", value: 10 },
  { title: "11", value: 11 },
  { title: "12", value: 12 },
  { title: "13", value: 13 },
  { title: "14", value: 14 },
  { title: "15", value: 15 },
  { title: "16", value: 16 },
  { title: "17", value: 17 },
  { title: "18", value: 18 },
  { title: "19", value: 19 },
  { title: "20", value: 20 },
  { title: "21", value: 21 },
  { title: "22", value: 22 },
  { title: "23", value: 23 },
];


export {
  DATE_FORMAT_TYPE,
 
  API_METHODS,
  TOAST_TYPE,
 
  CURRENCY_FORMAT,
  
};
