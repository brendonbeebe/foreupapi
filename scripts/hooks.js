var before = require('hooks').before;

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
before("Courses > Sales > Create", function (transaction) {
    transaction.skip = true;
});
