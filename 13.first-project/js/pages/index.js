import { Row } from "../components/row.js";
import { users } from "../users.js";

const $users = document.querySelector("#usersList");

for (let user of users) {
  $users.innerHTML += Row(user);
}
