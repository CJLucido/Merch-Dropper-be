exports.seed = function(knex) {
  return knex('orders').insert([
    {status: 'pending',
    total: 34.76,
    subtotal: 25.87,
    tax: 2.99,
    fees: 1.26,
    shipping: 4.64,
    orderToken: '70192HJALKANOIAMNL',
    mode: '-',
    createdAt: 1529644667898,
    store_name: 'Anthill Store',
    username: 'merchdropperadmin'}
  ]);
};
