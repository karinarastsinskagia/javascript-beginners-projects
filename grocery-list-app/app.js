//
var listContainer = document.querySelector(".list");
var newItemBtn = document.getElementById("add-item");
var clearBtn = document.getElementById("clear-all");
// display items onload
window.addEventListener("DOMContentLoaded", setupItems);
// Listeners //
newItemBtn.addEventListener("click", addItem);
clearBtn.addEventListener("click", clearAll);

//add action
function addItem(e) {

    var itemValue = document.querySelector("#item-name").value;

    if (itemValue !== "")
    {
        var id = new Date().getTime().toString();

        createListItem(id, itemValue)

        // display alert
        window.alert("New item added to the list");
        // show container
        // container.classList.add("show-container");
        // set local storage
        addToLocalStorage(id, itemValue)
        // set back to default
        document.querySelector("#item-name").value = '';


    }
    else
    {
        window.alert("Please, fill a value for new item")
    }

}

//edit existing item in the list
//delete item from the list
function editItem(e) {
    let itemToEdit = e.currentTarget.parentElement.parentElement
    // console.log(itemToEdit.firstElementChild)
    let newValue = window.prompt("Please fill the new item value", "defaultText");
    itemToEdit.firstElementChild.innerHTML = `<p>${newValue}</p>`



    //edit from localStorage
    let existingItems = getLocalStorage()
    existingItems = existingItems.filter(function (item) {
        if (item.id !== itemToEdit.id)
        {
            return item;
        }
    });
    let id = itemToEdit.id
    existingItems.push({id, newValue})

    localStorage.setItem("list", JSON.stringify(existingItems))

    window.alert("Item edit")

}

//delete item from the list
function deleteItem(e)
{
    let itemToDelete =  e.currentTarget.parentElement.parentElement

    //remove child
    listContainer.removeChild(itemToDelete)

    //remove from localStorage
    let existingItems = getLocalStorage()
    existingItems = existingItems.filter(function (item) {
        if (item.id !== itemToDelete.id) {
            return item;
        }
    });

    localStorage.setItem("list", JSON.stringify(existingItems))

    window.alert("Item removed")

}

//delete all items from the list
function clearAll(){

    document.querySelectorAll('.item-row').forEach(function (item){
        listContainer.removeChild(item)
    })

    localStorage.removeItem('list')


}

/// internal methods ///
function createListItem(id, value) {
    var newItem = document.createElement("div")
    newItem.className = "item-row"
    newItem.id = id
    newItem.innerHTML = `<div class="item">
                                <p>${value}</p>
                             </div> 
                             <div class="item-action">
                                <button type="submit" class="edit-item" id="edit-item-${id}">Edit</button></div>
                             <div class="item-action"> 
                             <button type="submit" class="delete-item" id="delete-item-${id}">Delete</button></div>`

    listContainer.appendChild(newItem)

    var editBtn = document.getElementById(`edit-item-${id}`)
    editBtn.addEventListener('click', editItem);

    var deleteBtn = document.getElementById(`delete-item-${id}`)
    deleteBtn.addEventListener('click', deleteItem);


}

// local storage methods //
function setupItems() {
    let items = getLocalStorage();
    if (items.length > 0)
    {
        items.forEach(function (item) {
            createListItem(item.id, item.value);
        });
    }
}
function addToLocalStorage(id, value) {
    var existingItems = getLocalStorage()
    existingItems.push({id, value})

    localStorage.setItem("list", JSON.stringify(existingItems))
}
function getLocalStorage() {
    return localStorage.getItem("list")
        ? JSON.parse(localStorage.getItem("list"))
        : [];
}

