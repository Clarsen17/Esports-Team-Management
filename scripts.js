
// scripts.js

// Initialize localStorage for players, teams, schedules, and scores if not already initialized
if (!localStorage.getItem('players')) {
  localStorage.setItem('players', JSON.stringify([]));
}

if (!localStorage.getItem('teams')) {
  localStorage.setItem('teams', JSON.stringify([]));
}

if (!localStorage.getItem('schedules')) {
  localStorage.setItem('schedules', JSON.stringify([]));
}

if (!localStorage.getItem('scores')) {
  localStorage.setItem('scores', JSON.stringify([]));
}

// Function to add a new player to the list
function addPlayer(name, ign, role, sr, team) {
  const players = JSON.parse(localStorage.getItem('players'));
  const newPlayer = { name, ign, role, sr, team };
  players.push(newPlayer);
  localStorage.setItem('players', JSON.stringify(players));
  displayPlayers();
}

// Function to display players in the list
function displayPlayers() {
  const players = JSON.parse(localStorage.getItem('players'));
  const playerList = document.getElementById('playerList');
  playerList.innerHTML = ''; // Clear current list

  players.forEach(player => {
    const listItem = document.createElement('li');
    listItem.textContent = `${player.name} (${player.ign}) - Role: ${player.role}, SR: ${player.sr}, Team: ${player.team}`;
    playerList.appendChild(listItem);
  });
}

// Function to add a new team to the list
function addTeam(name, gameTitle, averageSR) {
  const teams = JSON.parse(localStorage.getItem('teams'));
  const newTeam = { name, gameTitle, averageSR: averageSR || "N/A" };
  teams.push(newTeam);
  localStorage.setItem('teams', JSON.stringify(teams));
  displayTeams();
}

// Function to display teams in the list
function displayTeams() {
  const teams = JSON.parse(localStorage.getItem('teams'));
  const teamList = document.getElementById('teamList');
  teamList.innerHTML = ''; // Clear current list

  teams.forEach(team => {
    const listItem = document.createElement('li');
    listItem.textContent = `${team.name} - Game: ${team.gameTitle}, Average SR: ${team.averageSR}`;
    teamList.appendChild(listItem);
  });
}

// Function to add a new schedule to the list
function addSchedule(teamName, opponent, date, time) {
  const schedules = JSON.parse(localStorage.getItem('schedules'));
  const newSchedule = { teamName, opponent, date, time };
  schedules.push(newSchedule);
  localStorage.setItem('schedules', JSON.stringify(schedules));
  displaySchedules();
}

// Function to display schedules in the list
function displaySchedules() {
  const schedules = JSON.parse(localStorage.getItem('schedules'));
  const scheduleList = document.getElementById('scheduleList');
  scheduleList.innerHTML = ''; // Clear current list

  schedules.forEach(schedule => {
    const listItem = document.createElement('li');
    listItem.textContent = `Team: ${schedule.teamName} vs. ${schedule.opponent} on ${schedule.date} at ${schedule.time}`;
    scheduleList.appendChild(listItem);
  });
}

// Function to add a new match score to the list
function addScore(teamName, opponent, teamScore, opponentScore) {
  const scores = JSON.parse(localStorage.getItem('scores'));
  const newScore = { teamName, opponent, teamScore, opponentScore };
  scores.push(newScore);
  localStorage.setItem('scores', JSON.stringify(scores));
  displayScores();
}

// Function to display match scores in the list
function displayScores() {
  const scores = JSON.parse(localStorage.getItem('scores'));
  const scoreList = document.getElementById('scoreList');
  scoreList.innerHTML = ''; // Clear current list

  scores.forEach(score => {
    const listItem = document.createElement('li');
    listItem.textContent = `${score.teamName} ${score.teamScore} - ${score.opponentScore} ${score.opponent}`;
    scoreList.appendChild(listItem);
  });
}

// Function to handle form submissions for players, teams, schedules, and scores
document.addEventListener('DOMContentLoaded', () => {
  displayPlayers(); // Display the current player list on page load
  displayTeams(); // Display the current team list on page load
  displaySchedules(); // Display the current schedule list on page load
  displayScores(); // Display the current score list on page load

  const playerForm = document.getElementById('playerForm');
  if (playerForm) {
    playerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('playerName').value;
      const ign = document.getElementById('playerIGN').value;
      const role = document.getElementById('playerRole').value;
      const sr = document.getElementById('playerSR').value;
      const team = document.getElementById('playerTeam').value;

      addPlayer(name, ign, role, sr, team);
      playerForm.reset(); // Clear form after submission
    });
  }

  const teamForm = document.getElementById('teamForm');
  if (teamForm) {
    teamForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('teamName').value;
      const gameTitle = document.getElementById('gameTitle').value;
      const averageSR = document.getElementById('averageSR').value;

      addTeam(name, gameTitle, averageSR);
      teamForm.reset(); // Clear form after submission
    });
  }

  const scheduleForm = document.getElementById('scheduleForm');
  if (scheduleForm) {
    scheduleForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const teamName = document.getElementById('scheduleTeamName').value;
      const opponent = document.getElementById('opponent').value;
      const date = document.getElementById('date').value;
      const time = document.getElementById('time').value;

      addSchedule(teamName, opponent, date, time);
      scheduleForm.reset(); // Clear form after submission
    });
  }

  const scoreForm = document.getElementById('scoreForm');
  if (scoreForm) {
    scoreForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const teamName = document.getElementById('scoreTeamName').value;
      const opponent = document.getElementById('scoreOpponent').value;
      const teamScore = document.getElementById('teamScore').value;
      const opponentScore = document.getElementById('opponentScore').value;

      addScore(teamName, opponent, teamScore, opponentScore);
      scoreForm.reset(); // Clear form after submission
    });
  }
});
