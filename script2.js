
  var ul = document.getElementById("list-container");
var input = document.getElementById("input");

function add() {
  if (input.value === "") {
    alert("Please enter a task.");
    return;
  }
  var listitem = document.createElement("li");
  listitem.innerHTML = input.value + 
    "<div class='task-buttons'>" + 
    "<button class='edit' onclick='editItem(event)'>Edit</button>" + 
    "<button class='delete' onclick='deleteItem(event)'>Delete</button>" + 
    "</div>";
  ul.append(listitem);
  input.value = ""; // Clear the input after adding the task
}

function deleteItem(event) {
  event.target.parentElement.parentElement.remove();
}

function editItem(event) {
  var listitem = event.target.parentElement.parentElement;
  var newValue = prompt("Edit task:", listitem.firstChild.textContent.trim());
  if (newValue != null && newValue !== "") {
    listitem.firstChild.textContent = newValue + " ";
  }
}

