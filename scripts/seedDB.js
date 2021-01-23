const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/beans_db");

const bookSeed = [{

    UserName: "Matt",
    Reasons: ["Overall", "Work", "Friends", "Family", "Eat Healthy", "Run 1 Mile", "Relationship"],
    SwipeRightPercentage: 0,
    SwipeRights: 0,
    SwipeLefts: 0,
    BestBean: "-",
    WorstBean: "-",
    Date: new Date(Date.now())
}, ];

db.Post.remove({})
    .then(() => db.Post.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });