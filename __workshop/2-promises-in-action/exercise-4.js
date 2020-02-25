/*
1. Head over to https://docs.tronalddump.io/. Read the documentation...
2. Write a Promise that will return a random Tronald Dump quote.
_I had a hard time actually finding the api endpoint...
Here it is:_ https://api.tronalddump.io
3. Examine the response to get the right data to return. */

const request = require("request-promise");
const chalk = require("chalk");

const getTronaldDump = async () => {
  const options = {
    uri: "https://api.tronalddump.io/random/quote",
    headers: {
      Accept: "application/json"
    },
    json: true // Automatically parses the JSON string in the response
  };
  const response = await request(options);
  console.log(chalk.red(response.value));
};

getTronaldDump();
