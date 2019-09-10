'use strict';
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result['default'] = mod;
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var lib = __importStar(require('./lib'));
var controller_1 = __importDefault(require('./controller'));
describe('applyDiscount', function() {
  it('should apply 10% discount if customee has more than 10 points', function() {
    controller_1.default.getCustomerSync = jest
      .fn()
      .mockReturnValue({ points: 20 });
    var order = { customerId: '1', totalPrice: 10 };
    lib.applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });
});
