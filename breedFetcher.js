const request = require("request");
const args = process.argv;

const breed = args.slice(2).join(" ");

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {

  if (error !== null) {
    return console.log("Ooops, something went wrong!");

  }

  const data = JSON.parse(body);

  if (data[0] === undefined) {
    console.log("Are you sure that is a type of cat?");
  } else (
    console.log(data[0].description)
  );

});
  
