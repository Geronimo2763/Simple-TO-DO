var todoForm = document.getElementById("input-form");

todoForm.addEventListener("submit", addItem);

function toggleLine(el) {
  if (el.className === "item list-item") {
    el.className = "item list-item-l";
  } else {
    el.className = "item list-item";
  }
}

function deleteItem(el) {
  let todoList = document.getElementById("todo-list");
  el.className = "animatedAsk";
  setTimeout(function () {
    todoList.removeChild(el);
  }, 100);
}
function wait(time) {
  return new Promise(resolve => {
      setTimeout(resolve, time);
  });
}
function pushItem(text) {
  let todoList = document.getElementById("todo-list");
  let button = document.getElementById("submit-button");
  let listItem = document.createElement("li");
  let item = document.createElement("div");
  let deleteImg = document.createElement("img");
  let itemText = document.createElement("span");
  function reset() {
    button.className = "";  
  }
  button.className = "animatedButton"
  wait(85).then(reset)
  if (text === "") {
    return;
  }
  itemText.className = "item-text";
  itemText.innerHTML = text;
  item.append(itemText);

  item.className = "item list-item";
  listItem.addEventListener("click", () => toggleLine(item));

  deleteImg.src = "cross.png";
  deleteImg.className = "bin";
  deleteImg.addEventListener("click", () => deleteItem(listItem));

  listItem.append(item);
  listItem.append(deleteImg);
  todoList.insertBefore(listItem, todoList.firstChild);

  
  
  
}

function addItem(event) {
  event.preventDefault();
  let input = document.getElementById("add-task");
  pushItem(input.value);
  input.value = "";
}
