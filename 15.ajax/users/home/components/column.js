export function Column(value) {
  const $column = document.createElement("td");
  $column.innerText = value;
  return $column;
}
