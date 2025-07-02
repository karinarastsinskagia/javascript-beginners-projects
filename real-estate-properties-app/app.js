import {propertiesForSale} from "./properties/list.js"

const propertiesList = document.querySelector(".container");

const urlParams = new URLSearchParams(window.location.search);
let  singlePropertyId = parseInt(urlParams.get('id'));

if(singlePropertyId)
{
    let propertyForSale = propertiesForSale.filter(property=>  property.id === singlePropertyId)

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
else{
    propertiesForSale.forEach(function (propertyForSale) {

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

