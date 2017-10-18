var hooks = require('hooks');
var before = require('hooks').before;
var after = require('hooks').after;
var beforeEach = require('hooks').beforeEach;
var stash = {};
//
// before('Secured Access > Authentication > Create a New Token', function (transaction) {
//     // parse request body from API description
//     var requestBody = JSON.parse(transaction.request.body);
//
//     // modify request body here
//     requestBody.email = 'jackbarnes';
//     requestBody.password = 'jackbarnes';
//
//     // stringify the new body to request
//     transaction.request.body = JSON.stringify(requestBody);
// });
// // Stash the token we've got
// after('Secured Access > Authentication > Create a New Token', function (transaction) {
//     hooks.log(transaction.real.body);
//     stash.token = JSON.parse(transaction.real.body).data.id;
// });
// // Add the token to all HTTP transactions
// beforeEach(function (transaction) {
//     if (stash.token) {
//         transaction.request.headers['x-authorization'] = "Bearer "+stash.token;
//     }
//
//     transaction.fullPath = transaction.fullPath.replace('9039', '6270');
//     transaction.fullPath = transaction.fullPath.replace('24378234', '5041');//Sale Id
//     transaction.fullPath = transaction.fullPath.replace('11226', '3');//Price Class
//     transaction.fullPath = transaction.fullPath.replace('4204', '47');//Season
//     transaction.fullPath = transaction.fullPath.replace('59037', '123');//Timeframe
//     transaction.fullPath = transaction.fullPath.replace('6647556', '227234');//Customer
//     transaction.fullPath = transaction.fullPath.replace('1562', '87');//Tee Sheet Id
//     transaction.fullPath = transaction.fullPath.replace('TTID_0929103348mnhfo', 'TTID_1120095311otmhz');//Booking
// });

before("Tee Sheets > Bookings > Create One", function (transaction) {
  transaction.skip = true;
});
before("Tee Sheets > Bookings > Delete One", function (transaction) {
    transaction.skip = true;
});
before("Courses > Carts > Add Payment", function (transaction) {
    transaction.skip = true;
});
before("Courses > Carts > Complete Cart", function (transaction) {
    transaction.skip = true;
});
