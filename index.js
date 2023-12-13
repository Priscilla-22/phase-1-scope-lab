// Write your solution in this file!
var customerName = 'bob' ;

const leastFavoriteCustomer = 'Jane'

function upperCaseCustomerName() {
    return customerName.toUpperCase();
}

console.log(upperCaseCustomerName());


function setBestCustomer() {
    return bestCustomer;
}
console.log(setBestCustomer());


function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
}
overwriteBestCustomer('maybe bob')
console.log(bestCustomer);


function changeLeastFavoriteCustomer(newLeastFavourite) {
    leastFavoriteCustomer = newLeastFavourite;
}
changeLeastFavoriteCustomer('Leishan');
console.log(leastFavoriteCustomer);