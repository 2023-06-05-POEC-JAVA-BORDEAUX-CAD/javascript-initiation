import axios from "https://cdnjs.cloudflare.com/ajax/libs/axios/1.0.0/esm/axios.min.js";
import { BaseURL } from "../constants.js";
import { Row } from "./components/row.js";

const $usersList = document.querySelector("#usersList");

// 404 Not found
// 200 success
// Pending
// axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) => {});
axios.get(BaseURL).then((response) => {
  const { data } = response;
  for (let user of data) {
    const $Row = Row(user);
    $usersList.appendChild($Row);
  }
});
