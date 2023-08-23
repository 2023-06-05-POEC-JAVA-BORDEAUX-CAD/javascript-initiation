// TP

import { getParam } from "../utils/get-param.js";
import { users } from "./users.js";

const id = parseInt(getParam("id"));

// const user = users.find((user) => user.id === id);
const user = users.find(function (user) {
  return user.id === id;
});

const $details = document.querySelector("#details");
const $title = document.querySelector("#titleText");
$title.innerText = user.name;

$details.innerHTML = `
 <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://robohash.org/${user.id}" alt="Placeholder image">
      </figure>
    </div>
    
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://robohash.org/${user.id}" alt="Placeholder image">
          </figure>
        </div>
        
        <div class="media-content">
          <p class="title is-4">${user.name}</p>
          <p class="subtitle is-6">${user.username}</p>  
        </div>
      </div>
    
      <div class="content">
        <p><a href="mailto:${user.email}">${user.email}</a></p>
        <p><a href="tel:${user.phone}">${user.phone}</a></p>
        <p><b>${user.company.name}</b></p>
        <blockquote><i>"${user.company.catchPhrase}"</i></blockquote>
      </div>
    </div>
  </div>
`;
