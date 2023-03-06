const toDoListData = ["Milk", "Eggs", "Bread"];
const toDoListContainer = document.querySelector("[data-list-container]");
const newItemValue = document.querySelector("[data-item-value]");
const buttonItem = document.querySelector("[data-button-item]");
const editButton = document.querySelector("[edit-button-item]");
const dataForm = document.querySelector("[data-form-item]");
const cancelInputB = document.querySelector("[cancel-button-item]");
const deleteInputB = document.querySelector("[delete-button-item]");
const showClass = document.querySelector("[data-show-class]");

toDoListData.push("Butter");

function showList() {
  for (let toDos of toDoListData) {
    const newListItemLi = document.createElement("li");
    toDoListContainer.append(newListItemLi);
    newListItemLi.innerText = toDos;
  }
}

function clearItems() {
  while (toDoListContainer.firstChild) {
    toDoListContainer.removeChild(toDoListContainer.firstChild);
  }
}

function addRadioButton() {
  for (let toDos of toDoListData) {
    const newListItemLi = document.createElement("li");
    const radioInput = document.createElement("input");
    radioInput.setAttribute("type", "radio");
    toDoListContainer.append(newListItemLi);
    newListItemLi.append(radioInput, ` ${toDos}`);
  }
}

function hideInputs() {
  newItemValue.classList.add("hidden");
  buttonItem.classList.add("hidden");
  editButton.classList.add("hidden");
  cancelInputB.classList.remove("hidden");
  deleteInputB.classList.remove("hidden");
}

showList();

buttonItem.addEventListener("click", function (e) {
  e.preventDefault();
  if (newItemValue.value !== "") {
    showClass.classList.add("show");
    setTimeout(() => {
      const newListItemLi = document.createElement("li");
      newListItemLi.innerText = newItemValue.value;
      toDoListData.push(newItemValue.value);
      toDoListContainer.append(newListItemLi);
      newItemValue.value = "";
      showClass.classList.remove("show");
    }, 600);
    clearItems();
    showList();
  }
});

editButton.addEventListener("click", function (e) {
  e.preventDefault();
  clearItems();
  addRadioButton();
  hideInputs();
});

cancelInputB.addEventListener("click", function (e) {
  e.preventDefault();
  newItemValue.classList.remove("hidden");
  buttonItem.classList.remove("hidden");
  editButton.classList.remove("hidden");
  cancelInputB.classList.add("hidden");
  deleteInputB.classList.add("hidden");
  clearItems();
  showList();
});

deleteInputB.addEventListener("click", function (e) {
  e.preventDefault();
  removeItem();
  newItemValue.classList.remove("hidden");
  buttonItem.classList.remove("hidden");
  editButton.classList.remove("hidden");
  cancelInputB.classList.add("hidden");
  deleteInputB.classList.add("hidden");
  clearItems();
  showList();
});

function removeItem() {
  let items = toDoListContainer.getElementsByTagName("li");
  for (let i = 0; i < items.length; i++) {
    let checkedItems = items[i].firstElementChild.checked;
    if (checkedItems === true) {
      let liValue = items[i].innerText;
      console.log(liValue);
      for (let i = toDoListData.length - 1; i >= 0; i--) {
        if (liValue.includes(toDoListData[i])) {
          toDoListData.splice(i, 1);
        }
      }
    }
  }
}
