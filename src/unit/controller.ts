export const getCustomerSync = (id: string) => {
  console.log('Reading a customer from MongoDB...');
  return { id, points: 11 };
};

export default {
  getCustomerSync
};
