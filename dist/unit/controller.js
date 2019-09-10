'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.getCustomerSync = function(id) {
  console.log('Reading a customer from MongoDB...');
  return { id: id, points: 11 };
};
exports.default = {
  getCustomerSync: exports.getCustomerSync
};
