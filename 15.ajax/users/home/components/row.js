import { Column } from "./column.js";
import { ViewButton } from "./view-button.js";

export function Row(user) {
  const { id, name, email, address, phone, company } = user;
  const $Row = document.createElement("tr");

  const $id = Column(id);

  const $name = Column(name);

  const $email = Column(email);

  const $city = Column(address.city);

  const $phone = Column(phone);

  const $companyName = Column(company.name);

  const $action = Column("");

  const $view = ViewButton(id, "View", ["button", "is-primary"]);
  $action.appendChild($view);

  $Row.append($id, $name, $email, $city, $phone, $companyName, $action);
  return $Row;
}
