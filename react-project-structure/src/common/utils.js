import moment from "moment";

import { CURRENCY_FORMAT, DATE_FORMAT_TYPE } from "./constants";

export const isObject = (obj) => {
  return obj === Object(obj) && !Array.isArray(obj) && typeof obj !== "function";
};

export const snakeToCamelCase = (text) => {
  if (!isNaN(text) || typeof text !== "string") {
    return text;
  } else if (text === "_id") {
    return "id";
  }
  return text.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace("-", "").replace("_", "");
  });
};

export const snakeToCamelCaseObjectFormatter = (data) => {
  if (isObject(data)) {
    const temp = {};
    Object.keys(data).forEach((k) => {
      temp[snakeToCamelCase(k)] = data[k];
    });
    return temp;
  } else if (Array.isArray(data)) {
    return data.map((eachObj) => {
      return snakeToCamelCaseObjectFormatter(eachObj);
    });
  }
  return data;
};

/**
 * regex expression for Email address
 */
const EMAIL_REGEX = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@%#!])[A-Za-z0-9@%#!]{8,}$/;

/**
 * validates the email address
 * returns boolean value
 * @param emailAddress string
 */
export const isEmailAddressValid = (emailAddress) => {
  return EMAIL_REGEX.test(emailAddress);
};

/**
 * validates the password
 * returns boolean value
 * @param password string
 */
export const isPasswordValid = (password) => {
  return PASSWORD_REGEX.test(password);
};

/**
 * Function to check whether all the cells in the table are filled
 * @param {Array<Array>} tableData 2D Array
 * @returns boolean (true if values are there otherwise false)
 */
export const checkTableData = (tableData, caseName = "") => {
  let isValid = true;
  let isMilestoneSumValid = true;
  tableData.forEach((row) => {
    isValid = row.every((cell) => {
      if (typeof cell === "object") {
        if (!cell.hasOwnProperty("value")) {
          return false;
        } else if (!cell.value) {
          return false;
        } else {
          return true;
        }
      } else {
        if (!cell) {
          return false;
        }
        return true;
      }
    });
  });
  if (caseName && caseName === "milestone") {
    let percentSum = 0;
    for (let i = 0; i < tableData.length; i++) {
      if (tableData[i][1].value) {
        percentSum += Number(tableData[i][1].value);
      }
    }
    if (percentSum !== 100) {
      isMilestoneSumValid = false;
    }
  }
  return {
    isValid: isValid && isMilestoneSumValid,
    msg: !isMilestoneSumValid ? "Total milestone percent must be equal to 100" : "",
  };
};

export const mstKeyLog = (msg, key) => {
  console.log(msg, JSON.parse(JSON.stringify(key)));
};

export const getTitleByDropdownValue = (options, selectedValue) => {
  return (
    options.find((option) => {
      return option.value === selectedValue;
    })?.title || ""
  );
};

export const getValueByDropdownTitle = (options, selectedTitle) => {
  return (
    options.find((option) => {
      return option.title === selectedTitle;
    })?.value || ""
  );
};

/**
 * @returns email input field error msg
 */
export const getEmailInputErrorMsg = (emailAddress) => {
  let errorMsg = "";
  if (emailAddress && !isEmailAddressValid(emailAddress)) {
    errorMsg = "Invalid email address.";
  } else {
    errorMsg = "This field is required.";
  }
  return errorMsg;
};

export const convertStringToTitleCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

/**
 *
 * @param {string} value
 * @return {string}
 */
export const showInCurrencyFormat = (value, format = CURRENCY_FORMAT.foreign) => {
  let valueToWork = value;
  if (typeof value === "number") {
    value = value.toString();
    valueToWork = value.toString();
  }
  let finalValue = "";
  let afterDec = "";
  if (value.includes(".")) {
    let [a, b] = value.split(".");
    valueToWork = a;
    afterDec = b;
  }
  if (valueToWork.length < 3) {
    return value;
  }
  let i = 2;
  const reversedList = valueToWork.split("").reverse();
  reversedList.forEach((item, index) => {
    finalValue += item;
    if (index === i && reversedList.length !== index + 1) {
      finalValue += ",";
      i += format;
    }
  });
  const res = `${finalValue.split("").reverse().join("")}${value.includes(".") ? `.${afterDec}` : ""}`;
  return res;
};

/**
 * converts date into requested format
 * @param date string
 * @param dateFormatType string
 */
export const dateFormatter = (date, dateFormatType = DATE_FORMAT_TYPE.FULL_DATE_SLASH_FORMAT) => {
  const newDate = moment(date).format(dateFormatType);
  return newDate;
};

export const getRandomValue = (maxLimit) => {
  return Math.floor(Math.random() * maxLimit);
};

export const addSpacesToCamelOrPascalCase = (input) => {
  return input.replace(/([A-Z])/g, " $1").trim();
};

export const bufferToBase64 = (buffer) => {
  // Convert the buffer to a Uint8Array
  const byteArray = new Uint8Array(buffer.data);
  // Create a binary string
  const binaryString = byteArray.reduce((data, byte) => {
    return data + String.fromCharCode(byte);
  }, "");
  // Convert binary string to Base64
  return btoa(binaryString);
};
