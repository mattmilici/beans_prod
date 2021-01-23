const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({

    UserName: { type: String, required: true },
    Reasons: { type: Array, "default": [] },
    SwipeRightPercentage: { type: Number, "default": 0, required: true },
    SwipeRights: { type: Number, "default": 0, required: true },
    SwipeLefts: { type: Number, "default": 0, required: true },
    BestBean: String,
    WorstBean: String,
    Date: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;