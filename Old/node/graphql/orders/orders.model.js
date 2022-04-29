const orders = [
  {
    date: '2009-01-01',
    subtotal: 90.22,
    items: [
      {
        product: {
          id: 'redshoe',
          description: 'Old Red shoe',
          price: 45.12,
        },
        quantity: 2,
      },
    ],
  },
];

function getAllOrders() {
  return orders;
}

module.exports= {
  getAllOrders,
};
