export function ViewButton(id, label, classes) {
  //[btn,btn-primary]
  const $view = document.createElement("a");
  $view.href = `/users/details/index.html?id=${id}`;
  $view.innerText = label;
  for (const classe of classes) {
    $view.classList.add(classe);
  }
  return $view;
}
