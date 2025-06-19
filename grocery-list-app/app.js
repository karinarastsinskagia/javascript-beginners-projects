
//add new item to the list
var newItem = document.getElementById("add-item");
newItem.addEventListener("click", function addItem(event) {

    var item = document.querySelector("#item-name").value;

    if(item !== "")
    {
        var id =  new Date().getTime().toString();

        localStorage.setItem(id,item)
    }
    else{
       window.alert("Please, fill a value for new item")
    }

    event.preventDefault();
});

//edit existing item in the list

//delete item from the list

//delete all items from the list

