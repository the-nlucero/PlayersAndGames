const team = 
{

  _players: [
      {
      firstName: 'Dak',
      lastName: 'Prescott',
      age: 28
      },

      {
      firstName: 'Ezekiel',
      lastName: 'Elliot',
      age: 26
      },

      {
      firstName: 'Amari',
      lastName: 'Cooper',
      age: 27
      },
    
  ],
  _games: [
    {
      opponent: 'Eagles',
      teampoints: 51,
      opponentPoints: 26
    },

    {
      opponent: 'Buccaneers',
      teampoints: 29,
      opponentPoints: 31
    },

    {
      opponent: 'Patriots',
      teampoints: 35,
      opponentPoints: 29
    },
  ],

    get players()
    {
      return this._players;
    },

    get games()
    {
      return this._games;
    },

addPlayer(firstName, lastName, age)
{
  let player = 
  {
    firstName: firstName,
    lastName: lastName,
    age: age,
  };
  this.players.push(player);
},

addGame(opponent, teampoints, opponentPoints)
{
  let newGame = 
  {
  opponent: opponent,
  teampoints: teampoints,
  opponentPoints: opponentPoints,
  };
  this.games.push(newGame);
}



};

team.addPlayer('Micah', 'Parsons', 22);
team.addPlayer('Trevon', 'Diggs', 23);
team.addPlayer('Bugs', 'Bunny', 78);

team.addGame('Vikings', 20, 16);
team.addGame('Broncos', 30, 16);
team.addGame('Falcons', 43, 3);

console.log(team.players);
console.log('\n');
console.log(team.games);