
/*
let uniOne = document.getElementById("unique_one")
let uniTwo = document.getElementById("unique_two")

uniOne.addEventListener("click", function() { hiFromID(uniOne) })
uniTwo.addEventListener("click", function() { hiFromID(uniTwo) })

function hiFromID(element) {
    console.log("Hi from " + element.id)
}
*/





let uniOuter = document.getElementById("outer")

uniOuter.addEventListener("click", hiFromAllIDs)

function hiFromAllIDs(event) {
    let target = event.target
    document.getElementById("print").innerHTML = "Hi from " + target.id
}








let arr = ['Lars', 'Jon', 'Peter', 'Bo', 'Frederik']
arr = arr.map(name => "<li>" + name + "</li>")

document.getElementById("ul_list").innerHTML = "<ul>" + arr.join("") + "</ul>"

function addInputName(event) {
    let newName = document.getElementById("input_name").value
    arr.push("<li>" + newName + "</li>")
    document.getElementById("ul_list").innerHTML = "<ul>" + arr.join("") + "</ul>"
    event.preventDefault()
}

document.getElementById("submit_btn").addEventListener("click", addInputName)



function removeFirstName(event) {
    arr.shift()
    document.getElementById("ul_list").innerHTML = "<ul>" + arr.join("") + "</ul>"
    event.preventDefault()
}

document.getElementById("remove_first").addEventListener("click", removeFirstName)



function removeLastName(event) {
    arr.pop()
    document.getElementById("ul_list").innerHTML = "<ul>" + arr.join("") + "</ul>"
    event.preventDefault()
}

document.getElementById("remove_last").addEventListener("click", removeLastName)










var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

let carsTable = cars.map(car => "<tr>" + "<td>" + car.id + "</td>" + "<td>" + car.year + "</td>" + "<td>" + car.make + "</td>" + "<td>" + car.model + "</td>" + "<td>" + car.price + "</td>" + "</tr>")

document.getElementById("cars_arr").innerHTML = "<table class=\"table\">" + "<tr>" + "<th>id</th> <th>year</th> <th>make</th> <th>model</th> <th>price</th>" + "</tr>" + carsTable.join("") + "</table>"
 
function filterCarsByPrice(event) {
    let carPrice = document.getElementById("car_price").value
    let carsFilter = cars.filter(car => car.price < carPrice)
    carsTable = carsFilter.map(car => "<tr>" + "<td>" + car.id + "</td>" + "<td>" + car.year + "</td>" + "<td>" + car.make + "</td>" + "<td>" + car.model + "</td>" + "<td>" + car.price + "</td>" + "</tr>")
    document.getElementById("cars_arr").innerHTML = "<table class=\"table\">" + "<tr>" + "<th>id</th> <th>year</th> <th>make</th> <th>model</th> <th>price</th>" + "</tr>" + carsTable.join("") + "</table>"
    event.preventDefault()
}

document.getElementById("submit_car_price_btn").addEventListener("click", filterCarsByPrice)




let display = document.getElementById("display")
document.getElementById("buttons").addEventListener("click", numToDisplay)
document.getElementById("calculate").addEventListener("click", calculate)

function numToDisplay(event) {
    let target = event.target
    display.innerHTML += target.innerText
}



function calculate(event) {
    event.stopPropagation()
    let calcResult = eval(display.innerHTML)
    display.innerHTML = calcResult
}
