const mongoose = require("mongoose");
const User = require("./models/User.model");

const users = [
  {
    first_name: "Gabe",
    last_name: "Delgad0",
    phone_number: "7863035633",
  },
  {
    first_name: "Luis",
    last_name: "Gomez",
    phone_number: "4637772818",
  },
  {
    first_name: "Esteban",
    last_name: "Garcia",
    phone_number: "4749992020",
  },
  {
    first_name: "Jose",
    last_name: "Barrera",
    phone_number: "4644441255",
  },
  {
    first_name: "Mary",
    last_name: "Lopez",
    phone_number: "9997865353",
  },
  {
    first_name: "John",
    last_name: "Seed",
    phone_number: "6765554131",
  },
  {
    first_name: "Johnny",
    last_name: "Bravo",
    phone_number: "6647739988",
  },
  {
    first_name: "Adam",
    last_name: "Silver",
    phone_number: "3536624155",
  },
  {
    first_name: "Lebron",
    last_name: "James",
    phone_number: "9875554343",
  },
  {
    first_name: "James",
    last_name: "Barton",
    phone_number: "5755554131",
  },
];

mongoose
  .connect("mongodb://localhost/backend")
  .then((response) => {
    console.log("connected to mongo database name: ", response.connections[0].name);
  })
  .catch((err) => console.log("something went wrong connecting to database", err));

User.create(users)
  .then((results) => {
    console.log("Saved the following users successfully", results);
  })
  .catch((err) => {
    console.log("Something went wrong saving the seed users...", err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
