
/************
 * OPGAVE 1
 ************/

//Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 +n2
}

var sub = function(n1,n2){
  return n1 - n2
} 

var cb = function(n1,n2, callback){
  return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1,n2)
}



/************
 * OPGAVE 2
 ************/

console.log( add(1,2) )     // What will this print? Answer: 3 (n1 + n2)
console.log( add )          // What will it print and what does add represent? Answer: That add is a function since add by itself represents a function.
console.log( add(1,2,3) )  // What will it print? Answer: 3 (n1 + n2)
console.log( add(1) )	  // What will it print? Answer: NaN (n1 + undefined)
console.log( cb(3,3,add) ) // What will it print? Answer: 6 (add function as callback -> n1 + n2)
console.log( cb(4,3,sub) ) // What will it print? Answer: 1 (sub function as callback -> n1 - n2)
// Below is commented due to the error.
//console.log(cb(3,3,add())) // What will it print? (and what was the problem) Answer: Error (add isn't used as callback function but is being executed)
console.log(cb(3,"hh",add))// What will it print? Answer: 3hh (add function as callback -> n1 + n2 <- registered as two strings)



/************
 * OPGAVE 3
 ************/

var cb = function(n1,n2, callback){
    let operator
    
    switch(callback) {
        case add:
            operator = '+'
            break
        case sub:
            operator = '-'
            break
        case mul:
            operator = '*'
            break
        case div:
            operator = '/'
            break
        default:
            operator = '?'
            break
    }
    
    let result
    try {
        result = "Result from the two numbers: " + n1 + operator + n2 + "=" + callback(n1,n2)
    } catch(exception) {
        if(typeof n1 !== "number" || typeof n2 !== "number") {
            console.error(exception.name + ': ' + exception.message)
        } else if(typeof callback !== "function") {
            console.error(exception.name + ': ' + exception.message)
        }
    } finally {
        return result
    }
}

console.log(cb(3,3,add()))



/************
 * OPGAVE 4
 ************/

function mul(n1, n2) {
    return n1*n2
}

console.log(cb(3, 7, mul))



/************
 * OPGAVE 5
 ************/

var div = function(n1, n2) {
    return n1/n2
}

console.log(cb(500, 25, div))



/*************************************
 * OPGAVE 1 (filter, map and foreach)
 *************************************/

let arr = ['Lars', 'Jon', 'Peter', 'Bo', 'Frederik']

let arrFilt = arr.filter(name => name.length <= 3)

console.log('\narr:')
arr.forEach(name => console.log(name))

console.log('\narrFilt:')
arrFilt.forEach(name => console.log(name))
console.log('')

/*************************************
 * OPGAVE 2 (filter, map and foreach)
 *************************************/

let arrUpp = arr.map(name => name.toUpperCase())
console.log(arrUpp)
console.log('')


/*************************************
 * OPGAVE 3 (filter, map and foreach)
 *************************************/

let toHtml = arr.map(name => '<li>' + name + '</li>')
console.log('<ul>' + toHtml.join("") + '</ul>')


/*************************************
 * OPGAVE 4 (filter, map and foreach)
 *************************************/

var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
]

console.log('\ncars year:')
console.log(cars.filter(car => car.year > 1999))

console.log('\ncars make:')
console.log(cars.filter(car => car.make === 'Volvo'))

console.log('\ncars price:')
console.log(cars.filter(car => car.price < 5000))


// OPGAVE 4A - Kan ikke helt få den til at virke; ved ikke lige hvordan jeg splitter endnu en gang.
let arr4A = cars.map(car => car.id + car.year + car.make + car.model + car.price)

console.log('INSERT INTO cars (id,year,make,model,price) VALUES (' + arr4A.join(",")  + ');')
//console.log('INSERT INTO cars (id,year,make,model,price) VALUES (' + cars[0].id + ', ' + cars[0].year + ', ' + cars[0].make + ', ' + cars[0].model + ', ' + cars[0].price + ');')7
console.log('')



/*************************************
 * OPGAVE 1 & 2 (asynchronous callbacks)
 *************************************/

// Guess: aaaaaaa -> ddddddd -> fffffff -> eeeeee -> bbbbbbbb

var msgPrinter = function(msg,delay){
  setTimeout(function(){
    console.log(msg);
  },delay);
};
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");

