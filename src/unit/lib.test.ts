import * as lib from './lib';
import controllers from './controller';

describe('applyDiscount', () => {
  it('should apply 10% discount if customee has more than 10 points', () => {
    controllers.getCustomerSync = jest.fn().mockReturnValue({ points: 20 });
    const order = { customerId: '1', totalPrice: 10 };
    lib.applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });
});
