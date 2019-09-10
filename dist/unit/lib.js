'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var controller_1 = require('./controller');
exports.applyDiscount = function(order) {
  var customer = controller_1.getCustomerSync(order.customerId);
  if (customer.points > 10) order.totalPrice *= 0.9;
};
