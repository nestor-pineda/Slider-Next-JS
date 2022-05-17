function isObjEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

function jsonToQueryParams(jsonParams) {
  return Object.keys(jsonParams)
    .map((key) => key + "=" + jsonParams[key])
    .join("&");
}

export { isObjEmpty, jsonToQueryParams };
