import axios from "axios";
import { config } from "../config.js";
import { auth } from "../Session/firebase";

async function getDate() {
  const response = await axios.get(`${config.PATH_BASE}/Date`);
  return response.data;
}

async function callAuthorizedEndpoint(call) {
  console.log(auth);
  console.log(auth.currentUser);
  if (auth && auth.currentUser && auth.currentUser.accessToken) {
    const header = {
      headers: { Authorization: `B ${auth.currentUser.accessToken}` },
    };

    const result = await call(header);
    console.log(result);
    return result;
  }
  else
  {
    alert("Access token is empty")
  }
}

async function getGalleries() {
  let call = async (header) => {
    const response = await axios.get(`${config.PATH_BASE}/Gallery/List`, header);
    return response.data;
  };
  var r = callAuthorizedEndpoint(call);
  return r;
}

async function getImageUrls(galleryName) {
  const response = await axios.get(`${config.PATH_BASE}/Gallery/Get?Name=` + galleryName);
  return response.data;
}

const services = {
  getDate,
  getGalleries,
  getImageUrls,
};

export default services;
