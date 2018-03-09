// fake database...
// just return json

var db = {
    'players' : [
        {id: 1, tier: 1, name: 'Player 1', price: 12.20},
        {id: 2, tier: 2, name: 'Player 2', price: 13.10},
        {id: 3, tier: 2, name: 'Player 3', price: 5.50},
        {id: 4, tier: 3, name: 'Player 4', price: 6.63}
    ],

    users: [
        {id: 1, name: 'James', money: 200.15},
        {id: 2, name: 'Kevin'},
        {id: 3, name: 'Joe'},
        {id: 4, name: 'Tom'}
    ]
};

export default { db }

