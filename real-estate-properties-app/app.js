import {propertiesForSale} from "./properties/list.js"

const filters = document.querySelector(".filters");
const propertiesList = document.querySelector(".container");

const urlParams = new URLSearchParams(window.location.search);
let singlePropertyId = parseInt(urlParams.get('id'));

if (singlePropertyId)
{
    let propertyForSale = propertiesForSale.filter(property=>property.id === singlePropertyId)

    let {id, propertyLocation, type, priceGBP, roomsM2, comment, image} = propertyForSale[0]

    let propertyCard = document.createElement('section')
    propertyCard.className = 'card'

    propertyCard.innerHTML = `
    <img src="images/${image}" class="card img" alt="">
      <div class="card-right">
       <h2>${propertyLocation}</h2>
       <h3>Price : ${priceGBP}</h3>
       <p>${roomsM2} m2</p>
       <p>${type}</p>
       <p>${comment}</p>
      </div>`

    let backBtn = document.createElement('div')
    backBtn.innerHTML = `<button class="my-button" onclick="history.back()">Go Back</button>`

    propertiesList.appendChild(propertyCard)

    propertiesList.appendChild(backBtn)

}
else
{
    sortByLocation()
    sortByPrice()

    filterByHouse()
    filterByVila()
    filterByCottage()

    listProperties(propertiesForSale)
}

function listProperties(properties) {

    propertiesList.innerHTML = '';

    properties.forEach(function (propertyForSale) {

        let {id, propertyLocation, type, priceGBP, roomsM2, comment, image} = propertyForSale

        let propertyCard = document.createElement('section')
        propertyCard.className = 'card'

        propertyCard.innerHTML = `
        <img src="images/${image}" class="card img" alt="">
       
                              <div class="card-right">
                              
                               <a href="?id=${id}">${propertyLocation}</a>
                             
                               <h3>Price : ${priceGBP}</h3>
                              </div>`

        propertiesList.appendChild(propertyCard)
    })
}
function sortByLocation() {
    let sortByLocation = document.createElement('div')
    sortByLocation.innerHTML = `<button>Sort By Location</button>`

    sortByLocation.addEventListener('click', function (e) {
        propertiesForSale.sort((a, b)=>a.propertyLocation.localeCompare((b.propertyLocation)));

        listProperties(propertiesForSale)

    })

    filters.appendChild(sortByLocation)
}
function sortByPrice() {
    let sortByPrice = document.createElement('div')
    sortByPrice.innerHTML = `<button>Sort By Price</button>`

    sortByPrice.addEventListener('click', function (e) {
        propertiesForSale.sort((a, b)=>a.priceGBP - b.priceGBP);
        listProperties(propertiesForSale)
    })

    filters.appendChild(sortByPrice)
}
function filterByHouse() {
    //filter btn
    let filterByTypeHouse = document.createElement('div')
    filterByTypeHouse.innerHTML = `<input type="checkbox">House</input>`

    filterByTypeHouse.addEventListener('click', function (e) {
        let houses = propertiesForSale.filter(property=>property.type === "house")
        listProperties(houses)
    })

    filters.appendChild(filterByTypeHouse)
}
function filterByVila() {
    let filterByTypeVilla = document.createElement('div')
    filterByTypeVilla.innerHTML = `<input type="checkbox">Villa</<input>`

    filterByTypeVilla.addEventListener('click', function (e) {
        let villa = propertiesForSale.filter(property=>property.type === "villa")
        listProperties(villa)
    })

    filters.appendChild(filterByTypeVilla)
}
function filterByCottage() {
    let filterByTypeCottage = document.createElement('div')
    filterByTypeCottage.innerHTML = `<input type="checkbox">Cottage</button>`

    filterByTypeCottage.addEventListener('click', function (e) {
        let cottage = propertiesForSale.filter(property=>property.type === "cottage")
        listProperties(cottage)
    })

    filters.appendChild(filterByTypeCottage)
}

