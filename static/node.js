// JavaScript source code
const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://golf-leaderboard-data.p.rapidapi.com/world-rankings',
    headers: {
        'X-RapidAPI-Key': '7e4e390783mshc9e4dbac5db07d8p1f2fa3jsn7d9c27acbe02',
        'X-RapidAPI-Host': 'golf-leaderboard-data.p.rapidapi.com'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});