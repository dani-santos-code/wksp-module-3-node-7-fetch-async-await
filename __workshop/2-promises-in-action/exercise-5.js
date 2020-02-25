/*
1. Head over to https://github.com/sameerkumar18/geek-joke-api.
Read the documentation...
2. Write a Promise that will return a random joke.
*/

const request = require("request-promise");

const getGeekJoke = async () => {
  let options = {
    url: "https://geek-jokes.sameerkumar.website/api",
    method: "GET"
  };
  request(options, (err, response, body) => {
    if (!err && response.statusCode == 200) console.log(JSON.parse(body));
  });
};
getGeekJoke();
