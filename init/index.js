const mongoose = require("mongoose");
let initData = require("./data.js");
const Listing = require("../models/listing.js");

//const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";
const db_url = "mongodb+srv://bakchodi961:D2U32e95b4kxY0Xx@cluster0.0zvvaqr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

main().then(() => console.log("Connected to DB")).catch((err) => console.log(err));

async function main() {
    await mongoose.connect(db_url);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData = initData.map((obj) => ({
        ...obj,
        owner: "68c874510799fafecec7e97c"
    }));
    await Listing.insertMany(initData);
    console.log("data was initialized");
}

initDB();