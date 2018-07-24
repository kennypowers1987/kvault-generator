const axios = require('axios');

const times = x => f => {
    if (x > 0) {
        f()
        times(x - 1)(f)
    }
}

// use it
times(3000)(() => {
    axios.post('http://localhost:3030/lineups', {
            data: {
                'lineup': [1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
        })
        .then(function (response) {
            //console.log(response);
        })
        .catch(function (error) {
            //console.log(error);
        });
})

// var vm = this;
// vm.minProj = 160;
// $scope.searchPlayer = ''; // set the default search/filter term

// var picked = [];
// vm.lineups = $firebaseArray(ref);
// vm.firebasePlayers = $firebaseArray(ref2);
// vm.lineupCount = 0;
// vm.count = 0;
// vm.disabled = false;

// function getRandom(min, max) {
//     return Math.round(Math.random() * (max - min)) + min;
// }
// vm.ScrollToBottom = function () {
//     element.scrollTop = element.scrollHeight
// }


// function addToMain(arr) {
//     vm.lineups.$add(arr);
//     return runPicker();
// }

// var alreadyPicked = function (needle, haystack) {
//     var count = haystack.length;
//     for (var i = 0; i < count; i++) {
//         if (haystack[i] === needle) {
//             return true;
//         }
//     }
//     return false;
// }

// var rb2Add = function (rb2) {
//     if (alreadyPicked(rb2, picked)) {

//         rb2 = getRandom(25, 42);
//         return rb2Add(rb2);
//     }
//     picked.push(rb2);
// };
// var wr2Add = function (wr2) {
//     if (alreadyPicked(wr2, picked) === true) {

//         wr2 = getRandom(62, 103);
//         return wr2Add(wr2);
//     }
//     picked.push(wr2);
// };
// var wr3Add = function (wr3) {
//     if (alreadyPicked(wr3, picked) === true) {

//         wr3 = getRandom(62, 103);
//         return wr3Add(wr3);
//     }
//     picked.push(wr3);
// };

// var flexAdd = function (flex) {
//     if (alreadyPicked(flex, picked) === true) {

//         flex = getRandom(25, 103);
//         return flexAdd(flex);
//     }
//     picked.push(flex);
// };

// function pickPlayers() {
//     //var flexPosition = getRandom(1, 3);
//     vm.disabled = true;
//     var qb = getRandom(13, 24);
//     var rb1 = getRandom(25, 42);
//     var rb2 = getRandom(25, 42);
//     var wr1 = getRandom(62, 103);
//     var wr2 = getRandom(62, 103);
//     var wr3 = getRandom(62, 103);
//     var te = getRandom(43, 61);
//     var flex = getRandom(25, 103);
//     var dst = getRandom(1, 12);

//     picked.push(qb);
//     picked.push(rb1);
//     picked.push(wr1);
//     picked.push(te);
//     picked.push(dst);
//     rb2Add(rb2);
//     wr2Add(wr2);
//     wr3Add(wr3);
//     flexAdd(flex);
//     // console.log(picked);
//     createLineup(picked);
//     // console.log(lineups);
// }

// vm.runPicker = function () {
//     vm.count = 0;
//     runPicker();
// };

// function runPicker() {
//     $timeout(function () {
//         if (vm.count < 1) {
//             picked = [];
//             return pickPlayers();
//         }
//     }, .0001);

// }

// function createLineup(arr) {
//     var lineup = [];
//     var salary = 0;
//     var lineupProjected = 0;

//     for (var i = 0; i < arr.length; i++) {
//         var entry = arr[i];
//         var player = vm.players[entry];
//         lineupProjected = lineupProjected + vm.players[entry].PTS;
//         salary = salary + +vm.players[entry].Salary;
//         lineup.push(player);
//     }

//     lineup.push(salary);
//     lineup.push(lineupProjected);

//     if (salary <= 50000 && salary >= 49000 && lineupProjected > vm.minProj) {
//         vm.disabled = false;
//         vm.count++;
//         return addToMain(lineup);
//     } else {
//         return runPicker();
//     }
// }

// //setTimeout(function(){
// //window.location.reload(1);
// //}, 2500);


// vm.players = {
//     "1": {
//         "POS": "D",
//         "PLAYER": "Cowboys",
//         "TEAM": "DAL",
//         "OPPONENT": "KC",
//         "PTS": 7.22,
//         "Salary": 2300,
//         "Value": 3.14
//     },
//     "2": {
//         "POS": "D",
//         "PLAYER": "Panthers",
//         "TEAM": "CAR",
//         "OPPONENT": "ATL",
//         "PTS": 7.61,
//         "Salary": 2700,
//         "Value": 2.82
//     },
//     "3": {
//         "POS": "D",
//         "PLAYER": "Jaguars",
//         "TEAM": "JAX",
//         "OPPONENT": "CIN",
//         "PTS": 12.64,
//         "Salary": 3800,
//         "Value": 2.8
//     },
//     "4": {
//         "POS": "D",
//         "PLAYER": "Rams",
//         "TEAM": "LAR",
//         "OPPONENT": "NYG",
//         "PTS": 9.59,
//         "Salary": 3100,
//         "Value": 2.77
//     },
//     "5": {
//         "POS": "D",
//         "PLAYER": "Falcons",
//         "TEAM": "ATL",
//         "OPPONENT": "CAR",
//         "PTS": 6.84,
//         "Salary": 2600,
//         "Value": 2.63
//     },
//     "6": {
//         "POS": "D",
//         "PLAYER": "Eagles",
//         "TEAM": "PHI",
//         "OPPONENT": "DEN",
//         "PTS": 10.48,
//         "Salary": 3300,
//         "Value": 2.57
//     },
//     "7": {
//         "POS": "D",
//         "PLAYER": "Texans",
//         "TEAM": "HOU",
//         "OPPONENT": "IND",
//         "PTS": 6.75,
//         "Salary": 3600,
//         "Value": 2.43
//     },
//     "8": {
//         "POS": "D",
//         "PLAYER": "Broncos",
//         "TEAM": "DEN",
//         "OPPONENT": "PHI",
//         "PTS": 10,
//         "Salary": 2600,
//         "Value": 2.4
//     },
//     "9": {
//         "POS": "D",
//         "PLAYER": "Colts",
//         "TEAM": "IND",
//         "OPPONENT": "HOU",
//         "PTS": 10,
//         "Salary": 2000,
//         "Value": 3
//     },
//     "10": {
//         "POS": "D",
//         "PLAYER": "Saints",
//         "TEAM": "NO",
//         "OPPONENT": "TB",
//         "PTS": 9,
//         "Salary": 3400,
//         "Value": 1.85
//     },
//     "11": {
//         "POS": "D",
//         "PLAYER": "Titans",
//         "TEAM": "TEN",
//         "OPPONENT": "BAL",
//         "PTS": 6.55,
//         "Salary": 3700,
//         "Value": 1.77
//     },
//     "12": {
//         "POS": "D",
//         "PLAYER": "Cardinals",
//         "TEAM": "ARI",
//         "OPPONENT": "SF",
//         "PTS": 6.13,
//         "Salary": 3500,
//         "Value": 1.75
//     },
//     "13": {
//         "POS": "QB",
//         "PLAYER": "Drew Stanton",
//         "TEAM": "ARI",
//         "OPPONENT": "SF",
//         "PTS": 17,
//         "Salary": 4700,
//         "Value": 3.71
//     },
//     "14": {
//         "POS": "QB",
//         "PLAYER": "Tom Savage",
//         "TEAM": "HOU",
//         "OPPONENT": "IND",
//         "PTS": 16,
//         "Salary": 4600,
//         "Value": 3.36
//     },
//     "15": {
//         "POS": "QB",
//         "PLAYER": "Dak Prescott",
//         "TEAM": "DAL",
//         "OPPONENT": "KC",
//         "PTS": 23,
//         "Salary": 6700,
//         "Value": 3.28
//     },
//     "16": {
//         "POS": "QB",
//         "PLAYER": "Jacoby Brissett",
//         "TEAM": "IND",
//         "OPPONENT": "HOU",
//         "PTS": 21,
//         "Salary": 5200,
//         "Value": 3.24
//     },
//     "17": {
//         "POS": "QB",
//         "PLAYER": "Alex Smith",
//         "TEAM": "KC",
//         "OPPONENT": "DAL",
//         "PTS": 22.5,
//         "Salary": 6500,
//         "Value": 3.24
//     },
//     "18": {
//         "POS": "QB",
//         "PLAYER": "Drew Brees",
//         "TEAM": "NO",
//         "OPPONENT": "TB",
//         "PTS": 20,
//         "Salary": 7000,
//         "Value": 3.17
//     },
//     "19": {
//         "POS": "QB",
//         "PLAYER": "Kirk Cousins",
//         "TEAM": "WAS",
//         "OPPONENT": "SEA",
//         "PTS": 19,
//         "Salary": 5700,
//         "Value": 3.1
//     },
//     "20": {
//         "POS": "QB",
//         "PLAYER": "Russell Wilson",
//         "TEAM": "SEA",
//         "OPPONENT": "WAS",
//         "PTS": 18,
//         "Salary": 7300,
//         "Value": 3.06
//     },
//     "21": {
//         "POS": "QB",
//         "PLAYER": "Jameis WinstonÂ Q",
//         "TEAM": "TB",
//         "OPPONENT": "NO",
//         "PTS": 16,
//         "Salary": 5800,
//         "Value": 3.02
//     },
//     "22": {
//         "POS": "QB",
//         "PLAYER": "Marcus Mariota",
//         "TEAM": "TEN",
//         "OPPONENT": "BAL",
//         "PTS": 18,
//         "Salary": 6000,
//         "Value": 2.99
//     },
//     "23": {
//         "POS": "QB",
//         "PLAYER": "Carson Wentz",
//         "TEAM": "PHI",
//         "OPPONENT": "DEN",
//         "PTS": 22,
//         "Salary": 6100,
//         "Value": 2.98
//     },
//     "24": {
//         "POS": "QB",
//         "PLAYER": "Brock Osweiler",
//         "TEAM": "DEN",
//         "OPPONENT": "PHI",
//         "PTS": 20,
//         "Salary": 4500,
//         "Value": 2.71
//     },
//     "25": {
//         "POS": "RB",
//         "PLAYER": "Todd Gurley",
//         "TEAM": "LAR",
//         "OPPONENT": "NYG",
//         "PTS": 25.5,
//         "Salary": 8100,
//         "Value": 2.74
//     },
//     "26": {
//         "POS": "RB",
//         "PLAYER": "Mark Ingram",
//         "TEAM": "NO",
//         "OPPONENT": "TB",
//         "PTS": 18,
//         "Salary": 7600,
//         "Value": 2.69
//     },
//     "27": {
//         "POS": "RB",
//         "PLAYER": "Lamar MillerÂ Q",
//         "TEAM": "HOU",
//         "OPPONENT": "IND",
//         "PTS": 15,
//         "Salary": 6200,
//         "Value": 2.61
//     },
//     "28": {
//         "POS": "RB",
//         "PLAYER": "Wayne Gallman",
//         "TEAM": "NYG",
//         "OPPONENT": "LAR",
//         "PTS": 9,
//         "Salary": 3400,
//         "Value": 2.61
//     },
//     "29": {
//         "POS": "RB",
//         "PLAYER": "Eddie Lacy",
//         "TEAM": "SEA",
//         "OPPONENT": "WAS",
//         "PTS": 12,
//         "Salary": 3200,
//         "Value": 2.53
//     },
//     "30": {
//         "POS": "RB",
//         "PLAYER": "Leonard FournetteÂ P",
//         "TEAM": "JAX",
//         "OPPONENT": "CIN",
//         "PTS": 20,
//         "Salary": 8400,
//         "Value": 2.52
//     },
//     "31": {
//         "POS": "RB",
//         "PLAYER": "Christian McCaffrey",
//         "TEAM": "CAR",
//         "OPPONENT": "ATL",
//         "PTS": 19,
//         "Salary": 6500,
//         "Value": 2.49
//     },
//     "32": {
//         "POS": "RB",
//         "PLAYER": "Alvin Kamara",
//         "TEAM": "NO",
//         "OPPONENT": "TB",
//         "PTS": 20,
//         "Salary": 6300,
//         "Value": 2.49
//     },
//     "33": {
//         "POS": "RB",
//         "PLAYER": "CJ Anderson",
//         "TEAM": "DEN",
//         "OPPONENT": "PHI",
//         "PTS": 15,
//         "Salary": 4800,
//         "Value": 2.44
//     },
//     "34": {
//         "POS": "RB",
//         "PLAYER": "Kareem Hunt",
//         "TEAM": "KC",
//         "OPPONENT": "DAL",
//         "PTS": 25,
//         "Salary": 8600,
//         "Value": 2.36
//     },
//     "35": {
//         "POS": "RB",
//         "PLAYER": "Adrian Peterson",
//         "TEAM": "ARI",
//         "OPPONENT": "SF",
//         "PTS": 14,
//         "Salary": 5600,
//         "Value": 2.31
//     },
//     "36": {
//         "POS": "RB",
//         "PLAYER": "Ed Lacy",
//         "TEAM": "SEA",
//         "OPPONENT": "WAS",
//         "PTS": 13,
//         "Salary": 3200,
//         "Value": 2.31
//     },
//     "37": {
//         "POS": "RB",
//         "PLAYER": "Chris Thompson",
//         "TEAM": "WAS",
//         "OPPONENT": "SEA",
//         "PTS": 18,
//         "Salary": 6100,
//         "Value": 2.31
//     },
//     "38": {
//         "POS": "RB",
//         "PLAYER": "Doug Martin",
//         "TEAM": "TB",
//         "OPPONENT": "NO",
//         "PTS": 17,
//         "Salary": 5800,
//         "Value": 2.23
//     },
//     "39": {
//         "POS": "RB",
//         "PLAYER": "DeMarco MurrayÂ P",
//         "TEAM": "TEN",
//         "OPPONENT": "BAL",
//         "PTS": 13,
//         "Salary": 5400,
//         "Value": 2.13
//     },
//     "40": {
//         "POS": "RB",
//         "PLAYER": "Marlon Mack",
//         "TEAM": "IND",
//         "OPPONENT": "HOU",
//         "PTS": 16,
//         "Salary": 4100,
//         "Value": 2.01
//     },
//     "41": {
//         "POS": "RB",
//         "PLAYER": "Orleans Darkwa",
//         "TEAM": "NYG",
//         "OPPONENT": "LAR",
//         "PTS": 14,
//         "Salary": 3800,
//         "Value": 2.5
//     },
//     "42": {
//         "POS": "RB",
//         "PLAYER": "Ezekiel Elliot",
//         "TEAM": "DAL",
//         "OPPONENT": "KC",
//         "PTS": 29,
//         "Salary": 9000,
//         "Value": 1.08
//     },
//     "43": {
//         "POS": "TE",
//         "PLAYER": "George Kittle",
//         "TEAM": "SF",
//         "OPPONENT": "ARI",
//         "PTS": 13,
//         "Salary": 3200,
//         "Value": 4.04
//     },
//     "44": {
//         "POS": "TE",
//         "PLAYER": "Benjamin Watson",
//         "TEAM": "BAL",
//         "OPPONENT": "TEN",
//         "PTS": 10,
//         "Salary": 2700,
//         "Value": 3.74
//     },
//     "45": {
//         "POS": "TE",
//         "PLAYER": "Cameron Brate",
//         "TEAM": "TB",
//         "OPPONENT": "NO",
//         "PTS": 16,
//         "Salary": 4500,
//         "Value": 3.5
//     },
//     "46": {
//         "POS": "TE",
//         "PLAYER": "Marcedes Lewis",
//         "TEAM": "JAX",
//         "OPPONENT": "CIN",
//         "PTS": 12,
//         "Salary": 2600,
//         "Value": 3.42
//     },
//     "47": {
//         "POS": "TE",
//         "PLAYER": "Ed Dickson",
//         "TEAM": "CAR",
//         "OPPONENT": "ATL",
//         "PTS": 10.5,
//         "Salary": 3100,
//         "Value": 3.39
//     },
//     "48": {
//         "POS": "TE",
//         "PLAYER": "Evan Engram",
//         "TEAM": "NYG",
//         "OPPONENT": "LAR",
//         "PTS": 18,
//         "Salary": 5600,
//         "Value": 3.18
//     },
//     "49": {
//         "POS": "TE",
//         "PLAYER": "Delanie WalkerÂ Q",
//         "TEAM": "TEN",
//         "OPPONENT": "BAL",
//         "PTS": 14,
//         "Salary": 4900,
//         "Value": 3.18
//     },
//     "50": {
//         "POS": "TE",
//         "PLAYER": "Jack Doyle",
//         "TEAM": "IND",
//         "OPPONENT": "HOU",
//         "PTS": 14,
//         "Salary": 4300,
//         "Value": 3.16
//     },
//     "51": {
//         "POS": "TE",
//         "PLAYER": "Tyler Kroft",
//         "TEAM": "CIN",
//         "OPPONENT": "JAX",
//         "PTS": 9,
//         "Salary": 3900,
//         "Value": 3.08
//     },
//     "52": {
//         "POS": "TE",
//         "PLAYER": "Jermaine Gresham",
//         "TEAM": "ARI",
//         "OPPONENT": "SF",
//         "PTS": 7,
//         "Salary": 2500,
//         "Value": 2.93
//     },
//     "53": {
//         "POS": "TE",
//         "PLAYER": "Travis Kelce",
//         "TEAM": "KC",
//         "OPPONENT": "DAL",
//         "PTS": 20,
//         "Salary": 6700,
//         "Value": 2.83
//     },
//     "54": {
//         "POS": "TE",
//         "PLAYER": "Jimmy GrahamÂ Q",
//         "TEAM": "SEA",
//         "OPPONENT": "WAS",
//         "PTS": 18,
//         "Salary": 5000,
//         "Value": 2.71
//     },
//     "55": {
//         "POS": "TE",
//         "PLAYER": "Zach Ertz",
//         "TEAM": "PHI",
//         "OPPONENT": "DEN",
//         "PTS": 20,
//         "Salary": 6800,
//         "Value": 2.65
//     },
//     "56": {
//         "POS": "TE",
//         "PLAYER": "Vernon Davis",
//         "TEAM": "WAS",
//         "OPPONENT": "SEA",
//         "PTS": 16,
//         "Salary": 4100,
//         "Value": 2.65
//     },
//     "57": {
//         "POS": "TE",
//         "PLAYER": "Jason Witten",
//         "TEAM": "DAL",
//         "OPPONENT": "KC",
//         "PTS": 13,
//         "Salary": 4600,
//         "Value": 2.64
//     },
//     "58": {
//         "POS": "TE",
//         "PLAYER": "AJ Derby",
//         "TEAM": "DEN",
//         "OPPONENT": "PHI",
//         "PTS": 14,
//         "Salary": 2900,
//         "Value": 2.58
//     },
//     "59": {
//         "POS": "TE",
//         "PLAYER": "Tyler Higbee",
//         "TEAM": "LAR",
//         "OPPONENT": "NYG",
//         "PTS": 7,
//         "Salary": 2800,
//         "Value": 2.48
//     },
//     "60": {
//         "POS": "TE",
//         "PLAYER": "Ryan GriffinÂ Q",
//         "TEAM": "HOU",
//         "OPPONENT": "IND",
//         "PTS": 11,
//         "Salary": 3000,
//         "Value": 2.21
//     },
//     "61": {
//         "POS": "TE",
//         "PLAYER": "Gerald Everett",
//         "TEAM": "LAR",
//         "OPPONENT": "NYG",
//         "PTS": 8.5,
//         "Salary": 2600,
//         "Value": 1.3
//     },
//     "62": {
//         "POS": "WR",
//         "PLAYER": "Adam HumphriesÂ Q",
//         "TEAM": "TB",
//         "OPPONENT": "NO",
//         "PTS": 12,
//         "Salary": 3300,
//         "Value": 3.11
//     },
//     "63": {
//         "POS": "WR",
//         "PLAYER": "Cooper Kupp",
//         "TEAM": "LAR",
//         "OPPONENT": "NYG",
//         "PTS": 14,
//         "Salary": 4500,
//         "Value": 3.06
//     },
//     "64": {
//         "POS": "WR",
//         "PLAYER": "Marqise LeeÂ Q",
//         "TEAM": "JAX",
//         "OPPONENT": "CIN",
//         "PTS": 11,
//         "Salary": 3900,
//         "Value": 2.98
//     },
//     "65": {
//         "POS": "WR",
//         "PLAYER": "Dez BryantÂ Q",
//         "TEAM": "DAL",
//         "OPPONENT": "KC",
//         "PTS": 18,
//         "Salary": 6400,
//         "Value": 2.86
//     },
//     "66": {
//         "POS": "WR",
//         "PLAYER": "Sterling ShepardÂ Q",
//         "TEAM": "NYG",
//         "OPPONENT": "LAR",
//         "PTS": 14.5,
//         "Salary": 5200,
//         "Value": 2.79
//     },
//     "67": {
//         "POS": "WR",
//         "PLAYER": "JJ Nelson",
//         "TEAM": "ARI",
//         "OPPONENT": "SF",
//         "PTS": 8,
//         "Salary": 3300,
//         "Value": 2.76
//     },
//     "68": {
//         "POS": "WR",
//         "PLAYER": "Rishard Matthews",
//         "TEAM": "TEN",
//         "OPPONENT": "BAL",
//         "PTS": 12,
//         "Salary": 4600,
//         "Value": 2.74
//     },
//     "69": {
//         "POS": "WR",
//         "PLAYER": "TY Hilton",
//         "TEAM": "IND",
//         "OPPONENT": "HOU",
//         "PTS": 18,
//         "Salary": 4900,
//         "Value": 2.72
//     },
//     "70": {
//         "POS": "WR",
//         "PLAYER": "Michael Thomas",
//         "TEAM": "NO",
//         "OPPONENT": "TB",
//         "PTS": 21.5,
//         "Salary": 7200,
//         "Value": 2.68
//     },
//     "71": {
//         "POS": "WR",
//         "PLAYER": "AJ Green",
//         "TEAM": "CIN",
//         "OPPONENT": "JAX",
//         "PTS": 15,
//         "Salary": 7400,
//         "Value": 2.65
//     },
//     "72": {
//         "POS": "WR",
//         "PLAYER": "Robert Woods",
//         "TEAM": "LAR",
//         "OPPONENT": "NYG",
//         "PTS": 12,
//         "Salary": 4300,
//         "Value": 2.63
//     },
//     "73": {
//         "POS": "WR",
//         "PLAYER": "Devin Funchess",
//         "TEAM": "CAR",
//         "OPPONENT": "ATL",
//         "PTS": 15,
//         "Salary": 5400,
//         "Value": 2.61
//     },
//     "74": {
//         "POS": "WR",
//         "PLAYER": "Larry Fitzgerald",
//         "TEAM": "ARI",
//         "OPPONENT": "SF",
//         "PTS": 16,
//         "Salary": 5900,
//         "Value": 2.59
//     },
//     "75": {
//         "POS": "WR",
//         "PLAYER": "John Brown",
//         "TEAM": "ARI",
//         "OPPONENT": "SF",
//         "PTS": 10,
//         "Salary": 4200,
//         "Value": 2.56
//     },
//     "76": {
//         "POS": "WR",
//         "PLAYER": "Marquise Goodwin",
//         "TEAM": "SF",
//         "OPPONENT": "ARI",
//         "PTS": 10,
//         "Salary": 3800,
//         "Value": 2.47
//     },
//     "77": {
//         "POS": "WR",
//         "PLAYER": "Jamison CrowderÂ Q",
//         "TEAM": "WAS",
//         "OPPONENT": "SEA",
//         "PTS": 0,
//         "Salary": 4900,
//         "Value": 2.45
//     },
//     "78": {
//         "POS": "WR",
//         "PLAYER": "Doug Baldwin",
//         "TEAM": "SEA",
//         "OPPONENT": "WAS",
//         "PTS": 18,
//         "Salary": 6900,
//         "Value": 2.44
//     },
//     "79": {
//         "POS": "WR",
//         "PLAYER": "DeAndre Hopkins",
//         "TEAM": "HOU",
//         "OPPONENT": "IND",
//         "PTS": 19,
//         "Salary": 9200,
//         "Value": 2.41
//     },
//     "80": {
//         "POS": "WR",
//         "PLAYER": "Allen Hurns",
//         "TEAM": "JAX",
//         "OPPONENT": "CIN",
//         "PTS": 11.5,
//         "Salary": 4100,
//         "Value": 2.39
//     },
//     "81": {
//         "POS": "WR",
//         "PLAYER": "Tyreek Hill",
//         "TEAM": "KC",
//         "OPPONENT": "DAL",
//         "PTS": 19,
//         "Salary": 6700,
//         "Value": 2.38
//     },
//     "82": {
//         "POS": "WR",
//         "PLAYER": "Will Fuller",
//         "TEAM": "HOU",
//         "OPPONENT": "IND",
//         "PTS": 15,
//         "Salary": 7000,
//         "Value": 2.32
//     },
//     "83": {
//         "POS": "WR",
//         "PLAYER": "Demaryius Thomas",
//         "TEAM": "DEN",
//         "OPPONENT": "PHI",
//         "PTS": 14,
//         "Salary": 6000,
//         "Value": 2.3
//     },
//     "84": {
//         "POS": "WR",
//         "PLAYER": "Emmanuel Sanders",
//         "TEAM": "DEN",
//         "OPPONENT": "Phi",
//         "PTS": 17,
//         "Salary": 5700,
//         "Value": 2.29
//     },
//     "85": {
//         "POS": "WR",
//         "PLAYER": "Mohamed Sanu",
//         "TEAM": "ATL",
//         "OPPONENT": "CAR",
//         "PTS": 10,
//         "Salary": 5300,
//         "Value": 2.25
//     },
//     "86": {
//         "POS": "WR",
//         "PLAYER": "Paul Richardson",
//         "TEAM": "SEA",
//         "OPPONENT": "WAS",
//         "PTS": 12,
//         "Salary": 4700,
//         "Value": 2.24
//     },
//     "87": {
//         "POS": "WR",
//         "PLAYER": "Tyler Lockett",
//         "TEAM": "SEA",
//         "OPPONENT": "WAS",
//         "PTS": 12,
//         "Salary": 4600,
//         "Value": 2.24
//     },
//     "88": {
//         "POS": "WR",
//         "PLAYER": "Sammy Watkins",
//         "TEAM": "LAR",
//         "OPPONENT": "NYG",
//         "PTS": 14,
//         "Salary": 4200,
//         "Value": 2.22
//     },
//     "89": {
//         "POS": "WR",
//         "PLAYER": "DeSean Jackson",
//         "TEAM": "TB",
//         "OPPONENT": "NO",
//         "PTS": 13,
//         "Salary": 5500,
//         "Value": 2.22
//     },
//     "90": {
//         "POS": "WR",
//         "PLAYER": "Bruce Ellington",
//         "TEAM": "HOU",
//         "OPPONENT": "IND",
//         "PTS": 7,
//         "Salary": 3000,
//         "Value": 2.17
//     },
//     "91": {
//         "POS": "WR",
//         "PLAYER": "Trent Taylor",
//         "TEAM": "SF",
//         "OPPONENT": "ARI",
//         "PTS": 7,
//         "Salary": 3000,
//         "Value": 2.12
//     },
//     "92": {
//         "POS": "WR",
//         "PLAYER": "Mike Evans",
//         "TEAM": "TB",
//         "OPPONENT": "NO",
//         "PTS": 15,
//         "Salary": 7700,
//         "Value": 2.09
//     },
//     "93": {
//         "POS": "WR",
//         "PLAYER": "Julio Jones",
//         "TEAM": "ATL",
//         "OPPONENT": "CAR",
//         "PTS": 16,
//         "Salary": 7800,
//         "Value": 2.06
//     },
//     "94": {
//         "POS": "WR",
//         "PLAYER": "Cole BeasleyÂ Q",
//         "TEAM": "DAL",
//         "OPPONENT": "KC",
//         "PTS": 8,
//         "Salary": 4000,
//         "Value": 2.02
//     },
//     "95": {
//         "POS": "WR",
//         "PLAYER": "Brandon Coleman",
//         "TEAM": "NO",
//         "OPPONENT": "TB",
//         "PTS": 10,
//         "Salary": 3400,
//         "Value": 2.01
//     },
//     "96": {
//         "POS": "WR",
//         "PLAYER": "Terrance Williams",
//         "TEAM": "DAL",
//         "OPPONENT": "KC",
//         "PTS": 12,
//         "Salary": 3300,
//         "Value": 2.2
//     },
//     "97": {
//         "POS": "WR",
//         "PLAYER": "Ted Ginn",
//         "TEAM": "NO",
//         "OPPONENT": "TB",
//         "PTS": 11,
//         "Salary": 5000,
//         "Value": 2.2
//     },
//     "98": {
//         "POS": "WR",
//         "PLAYER": "Aldrick Robinson",
//         "TEAM": "SF",
//         "OPPONENT": "ARI",
//         "PTS": 12,
//         "Salary": 4000,
//         "Value": 2.2
//     },
//     "99": {
//         "POS": "WR",
//         "PLAYER": "Demarcus Robinson",
//         "TEAM": "KC",
//         "OPPONENT": "DAL",
//         "PTS": 12,
//         "Salary": 3200,
//         "Value": 3
//     },
//     "100": {
//         "POS": "WR",
//         "PLAYER": "Corey DavisÂ P",
//         "TEAM": "TEN",
//         "OPPONENT": "BAL",
//         "PTS": 14,
//         "Salary": 4400,
//         "Value": 3
//     },
//     "101": {
//         "POS": "WR",
//         "PLAYER": "Curtis Samuel",
//         "TEAM": "CAR",
//         "OPPONENT": "ATL",
//         "PTS": 12,
//         "Salary": 3100,
//         "Value": 3
//     },
//     "102": {
//         "POS": "WR",
//         "PLAYER": "Russ Shepard",
//         "TEAM": "CAR",
//         "OPPONENT": "ATL",
//         "PTS": 10,
//         "Salary": 3100,
//         "Value": 3
//     },
//     "103": {
//         "POS": "WR",
//         "PLAYER": "Jeremy Maclin",
//         "TEAM": "BAL",
//         "OPPONENT": "TEN",
//         "PTS": 11,
//         "Salary": 4000,
//         "Value": 3
//     }
// }
