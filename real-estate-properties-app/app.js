import {propertiesForSale} from "./properties/list.js"

const propertiesList = document.querySelector(".container");

propertiesForSale.forEach(function (propertyForSale) {

    let {propertyLocation, priceGBP, roomsM2, comment, image} = propertyForSale

    let propertyCard = document.createElement('section')
    propertyCard.className = 'card'

    let singlePropertyId = "single-property" + Math.random()

    propertyCard.innerHTML = `
        <img src="images/${image}" class="card img" alt="">
       
                              <div class="card-right">
                               <button id="${singlePropertyId}" type="button"> <h2>${propertyLocation}</h2> </button
                                 <h3>Price : ${priceGBP}</h3>
                              </div>`


    propertiesList.appendChild(propertyCard)

    let singleProperty = document.getElementById(singlePropertyId)

    singleProperty.addEventListener('click', function (e) {
        console.log('yes')
    })
})