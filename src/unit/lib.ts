import { getCustomerSync } from './controller';

export const applyDiscount = (order: {
  customerId: string;
  totalPrice: number;
}) => {
  const customer = getCustomerSync(order.customerId);
  if (customer.points > 10) order.totalPrice *= 0.9;
};
