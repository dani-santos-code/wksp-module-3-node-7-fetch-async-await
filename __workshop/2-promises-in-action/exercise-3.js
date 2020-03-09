/*1. Head over to https://icanhazdadjoke.com/api.
Read the documentation...
2. Write a Promise that will return a random joke.
3. `console.log` the result to read the joke.

Note: The `request-promise` module accepts a
`uri` but can also accept an object with various parameters.
_You will want to set the Headers to `"Accept": "application/json"`_
[See NPM]
(https://www.npmjs.com/package/request-promise#get-something-from-a-json-rest-api)*/

const request = require("request-promise");
const chalk = require("chalk");

const getDadJoke = async () => {
  try {
    const options = {
      uri: "https://icanhazdadjoke.com/",
      headers: {
        Accept: "application/json"
      },
      json: true // Automatically parses the JSON string in the response
    };
    const response = await request(options);
    console.log(chalk.green(response.joke));
  } catch (e) {
    console.log(e);
  }
};

getDadJoke();
