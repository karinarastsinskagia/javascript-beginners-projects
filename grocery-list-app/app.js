//
var listContainer = document.querySelector(".list");
var newItemBtn = document.getElementById("add-item");
// display items onload
window.addEventListener("DOMContentLoaded", setupItems);
// Listeners //
newItemBtn.addEventListener("click", addItem);

//add action
function addItem(event) {

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

//delete all items from the list


/// internal methods ///
function createListItem(id, value) {
    var newItem = document.createElement("div")
    newItem.className = "item-row"
    newItem.innerHTML = `<div class="item">
                                <p>${value}</p>
                             </div> 
                             <div class="item-action">
                                <button type="submit" class="edit-item">Edit</button></div>
                             <div class="item-action"> 
                             <button type="submit" class="delete-item">Delete</button></div>`


    listContainer.appendChild(newItem)
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

