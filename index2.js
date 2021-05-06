const { nextISSTimesForMyLocation } = require("./iss_promised");

const printPassTimes = function (passTimes) {
  for (const pass of passTimes) {
    let dateTime = new Date(pass.risetime * 1000);
    const duration = pass.duration;
    console.log(`Next pass at ${dateTime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
.then((passTimes) => printPassTimes(passTimes))
.catch(err => console.log("Whoops! it didn't work!",err.message))
