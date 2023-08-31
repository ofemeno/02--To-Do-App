const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addtask() {
  // validate input
  if (inputBox.value === "") {
    alert("Can not add empty task");
  } else {
    // create list element
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;

    // append list element
    listContainer.appendChild(li);

    // create span element
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";

    li.appendChild(span);
  }
  inputBox.value = "";
  saveData()
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData()
  }

  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData()
  }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask()

