const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
   author : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User',
    required : true
   },
    tweet : {
        type: String,
        required: true
    },
    image : {
        type: String
    },
    likes : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User'
        }
    ],
    createAt : {
        type: Date,
        default : Date.now
    }
})
const Post = mongoose.model("Post", postSchema);
module.exports = Post;