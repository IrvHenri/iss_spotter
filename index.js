const { nextISSTimesForMyLocation } = require("./iss");



// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP ('96.22.172.15',(err,coordinates)=>{
//   if(err){
//     console.log(err)
//   }else{
//     console.log(coordinates)
//   }
// })

// fetchISSFlyOverTimes({ latitude: 45.4995, longitude: -73.5848 },(err,passTimes)=>{
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(passTimes);
//   }
// });
nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  for (pass of passTimes) {
    console.log(
      `New pass at ${new Date(pass.risetime * 1000)} for ${
        pass.duration
      } seconds!`
    );
  }
});
