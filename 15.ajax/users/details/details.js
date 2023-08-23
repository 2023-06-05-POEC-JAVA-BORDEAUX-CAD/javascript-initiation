import axios from "https://cdnjs.cloudflare.com/ajax/libs/axios/1.0.0/esm/axios.min.js";
import { getParam } from "/utils/get-params.js";
import { BaseURL } from "../constants.js";
import { Card } from "./components/card.js";

const main = document.querySelector("main");
const id = getParam("id");

axios.get(`${BaseURL}/${id}`).then((response) => {
  const { data } = response;

  main.innerHTML = Card(data);
});
