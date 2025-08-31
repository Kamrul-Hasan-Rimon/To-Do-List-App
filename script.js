const inputBox = document.getElementById("input-box");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
function addTask() {
  const taskText = inputBox.value.trim();
  if (taskText !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;
    taskList.appendChild(listItem);
    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "\u00D7";
    deleteBtn.className = "delete";
    listItem.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", (e) => {
      taskList.removeChild(listItem);
      console.log(e);
      saveData();
    });
    listItem.addEventListener("click", (e) => {
      listItem.classList.toggle("checked");
      console.log(e);
      saveData();
    });
    inputBox.value = "";
    saveData();
  }
  if (taskText === "") {
    alert("You must write something!");
  }
}
inputBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTaskBtn.click();
  }
});

const saveData = () => {
  localStorage.setItem("Data", taskList.innerHTML);
};
const showTask = () => {
  taskList.innerHTML = localStorage.getItem("Data");
};
showTask();
const clearAll = () => {
  taskList.innerHTML = "";
  saveData();
};
