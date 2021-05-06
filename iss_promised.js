const request = require("request-promise-native");

const fetchMyIP = function () {
  return request("https://api.ipify.org/?format=json");
};

const fetchCoordsByIP = function (body) {
  const { ip } = JSON.parse(body);
  return request(`https://freegeoip.app/json/${ip}`);
};

const fetchISSFlyOverTimes = function (data) {
  const { latitude, longitude } = JSON.parse(data);
  return request(
    `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`
  );
};

const nextISSTimesForMyLocation = function () {
  return fetchMyIP()
    .then((body) => fetchCoordsByIP(body))
    .then((data) => fetchISSFlyOverTimes(data))
    .then((result) => {
      const { response } = JSON.parse(result);
      return response;
    });
};

module.exports = { nextISSTimesForMyLocation };
