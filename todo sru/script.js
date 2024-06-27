const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("List-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value; // Changed to textContent to avoid potential XSS
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    savedData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedData();
    }
}, false);

function savedData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
