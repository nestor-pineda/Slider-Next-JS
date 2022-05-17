import * as Utils from "./Utils";
import fetch from "isomorphic-unfetch";

function GETrequest(URL, getParams) {
  return new Promise((resolve, reject) => {
    let responseStatus = {};
    let getURL = "";
    let headers = {
      "Content-Type": "application/json",
    };
    if (!Utils.isObjEmpty(getParams)) {
      let queryString = Utils.jsonToQueryParams(getParams);
      getURL = URL + "?" + queryString;
    } else {
      getURL = URL;
    }
    fetch(getURL, {
      method: "GET",
      headers: headers,
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        responseStatus.body = responseData;
        resolve(responseStatus);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export default {
  GETrequest,
};
