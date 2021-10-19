function validateEmail(email) {
  // eslint-disable-next-line no-useless-escape
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(email);
}

const capitalizeString = (string) => {
  if (!string) {
    return string;
  }
  let stringArr = string.split(" ");
  if (stringArr.length < 1) {
    return string;
  }
  string = "";
  for (let i = 0; i < stringArr.length; i++) {
    let word = stringArr[i];
    string = string + " " + (word[0].toUpperCase() + word.substring(1));
  }
  return string;
};

function catchNetworkError(context) {
  context.commit(
    "updateError",
    {
      title: "A network error has occurred",
      message: "Please check your internet and try again.",
    },
    { root: true }
  );
}

function showGeneralError(context, message) {
  showError(context, message, "An error has occurred");
}

function showError(context, message, title = "") {
  context.commit(
    "updateError",
    { title: title, message: message },
    { root: true }
  );
}

function getNumberShorthand(number) {
  let suffix = "";
  if (number < 1e6 && number >= 1e3) {
    number = (number / 1e3).toFixed(1);
    suffix = "k";
  } else if (number < 1e9 && number >= 1e6) {
    number = (number / 1e6).toFixed(1);
    suffix = "m";
  } else if (number < 1e12 && number >= 1e9) {
    number = (number / 1e9).toFixed(1);
    suffix = "t";
  }
  return parseInt(number) + suffix;
}

function getCommaSeparatedNumber(number) {
  if (number) {
    const value = number.toString();
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return "";
  }
}

function showInternalError(context) {
  showGeneralError(
    context,
    "Oops, something went wrong. " +
      "There was an internal error, our engineers have been" +
      " notified and would resolve this shortly."
  );
}

function showAlert(store, payload) {
  store.commit(
    "updateAlert",
    {
      title: payload.title,
      message: payload.message,
      buttons: payload.buttons,
    },
    { root: true }
  );
}

function showHideLoading(store, showLoading) {
  store.commit("updateShowLoading", showLoading, { root: true });
}

export default {
  capitalizeString,
  catchNetworkError,
  showGeneralError,
  showInternalError,
  showError,
  showAlert,
  getNumberShorthand,
  validateEmail,
  getCommaSeparatedNumber,
  showHideLoading,
};
