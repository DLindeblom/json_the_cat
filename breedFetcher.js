const request = require("request");
const breedName = process.argv[2];

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      callback(error);
      return;
      // console.log(error);
      // if (error.hostname !== "api.thecatapi.com") {
      // return console.log("Incorrect URL");
    }

    const data = JSON.parse(body);

    if (data[0] === undefined) {
      callback("Breed is not found");
      // console.log("Are you sure that is a type of cat?");
    } else (
      callback(null, data[0].description)
    );

  });
};

module.exports = { fetchBreedDescription };