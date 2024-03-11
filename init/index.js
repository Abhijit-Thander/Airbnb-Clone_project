// const DB_URL = process.env.ATLASDB_URL;

const mongoose = require("mongoose");
const initData = require("./data.js");
const listing = require("../models/listing.js");

//mongo altas url
// const DB_URL = process.env.ATLASDB_URL;
const mongo_url = "mongodb://127.0.0.1:27017/abc";
main()
  .then((res) => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(mongo_url);
}

const initDb = async () => {
  await listing.deleteMany();
  initData.data = initData.data.map((obj) => ({
    ...obj,
    // owner: "65b52bfa7fe362332e08c660",
    owner: "65dcb66c51c878c072c89aa6",
  }));
  await listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDb();
