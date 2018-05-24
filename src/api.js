// fake database...
// just return json

import Vue from 'vue'

// mixin for injection into components
Vue.mixin({
  beforeCreate() {
    const options = this.$options;
    if( options.api ){
      this.$api = options.api;
    }
    else if (options.parent && options.parent.$api){
      this.$api = options.parent.$api;
    }

  }
});

let rosters = [
  {
    id: 1,
    user_id: 1,
    players: [
      {player_id: 1, shares: 33},
      {player_id: 3, shares: 22}
    ]
  }, {
    id: 2,
    user_id: 2,
    players: [
      {player_id: 1, shares: 15},
      {player_id: 2, shares: 41}
    ]
  }, {
    id: 3,
    user_id: 3,
    players: [
      {player_id: 1, shares: 31},
      {player_id: 3, shares: 28},
      {player_id: 4, shares: 7}
    ]
  }, {
    id: 4,
    user_id: 4,
    players: [
      {player_id: 1, shares: 28},
      {player_id: 2, shares: 19},
      {player_id: 4, shares: 30}
    ]
  }
];

let players = [
  {id: 1, tier: 1, name: 'Player 1', price: 12.20},
  {id: 2, tier: 2, name: 'Player 2', price: 13.10},
  {id: 3, tier: 2, name: 'Player 3', price: 5.50},
  {id: 4, tier: 3, name: 'Player 4', price: 6.63}
]

let users = [
  {id: 1, name: 'James', money: 200.15},
  {id: 2, name: 'Kevin', money: 300.25},
  {id: 3, name: 'Joe', money: 310.14},
  {id: 4, name: 'Tom', money: 225.97}
];

let api = {

  login : function(username, password) {
    return Promise.reject('invalid username');
  },

  get_roster: function (user_id) {
    let r = rosters.find(r => r.user_id === user_id);
    let users_players = [];
    for (let i = 0; i < r.players.length; i++) {
      let player_id = r.players[i].player_id;
      let player = players.find(p => p.id === player_id);
      player.shares = r.players[i].shares;
      users_players.push(player);
    }

    return users_players;
  },

  get_users: function() {
    return users;
  }
};

export {api}

