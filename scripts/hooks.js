var before = require('hooks').before;

before("Tee Sheets > Bookings > Create One", function (transaction) {
  transaction.skip = true;
});
before("Tee Sheets > Bookings > Delete One", function (transaction) {
    transaction.skip = true;
});
