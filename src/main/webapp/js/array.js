/*************
 * OPGAVE A:
 *************/
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

// concat() doesn't mutate the existing array; it has to be saved as a new variable.



/*************
 * OPGAVE B:
 *************/
let all = boys.concat(girls);
console.log('OPGAVE B: ', all);



/*************
 * OPGAVE C:
 *************/
console.log('OPGAVE C: Join with comma: ', all.join(','));
console.log('OPGAVE C: Join with hyphen: ', all.join('-'));



/*************
 * OPGAVE D:
 *************/
all.push('Lone', 'Gitte');
console.log('OPGAVE D: ', all);



/*************
 * OPGAVE E:
 *************/
all.unshift('Hans', 'Kurt');
console.log('OPGAVE E: ', all);



/*************
 * OPGAVE F:
 *************/
all.shift();
console.log('OPGAVE F: ', all);



/*************
 * OPGAVE G:
 *************/
all.pop();
console.log('OPGAVE G: ', all);



/*************
 * OPGAVE H:
 *************/
all.splice(3, 2);
console.log('OPGAVE H: ', all);



/*************
 * OPGAVE I:
 *************/
all.reverse();
console.log('OPGAVE I: ', all);



/*************
 * OPGAVE J:
 *************/
all.sort();
console.log('OPGAVE J: ', all);



/*************
 * OPGAVE K:
 *************/
all.sort(function (a, b) {
   return a.toLowerCase().localeCompare(b.toLowerCase()); 
});
console.log('OPGAVE K: ', all);



/*************
 * OPGAVE L:
 *************/
let allUp = all.map(n => n.toUpperCase());
console.log(allUp);



/*************
 * OPGAVE M:
 *************/
let allFilter = all.filter(n => n.charAt(0) === 'l' || n.charAt(0) === 'L');
console.log(allFilter);


