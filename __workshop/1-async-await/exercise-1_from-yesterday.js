// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");

// Returns the current position of the ISS
const getIssPosition = async () => {
  // add code here (include a try/catch as well)
  try {
    const response = await request("http://api.open-notify.org/iss-now.json");
    const issLocation = await JSON.parse(response);
    const position = await {
      lat: issLocation.iss_position.latitude,
      lng: issLocation.iss_position.longitude
    };
    console.log(position);
  } catch (e) {
    console.log(e);
  }
};

getIssPosition();
