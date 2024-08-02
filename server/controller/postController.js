const Post = require('../model/postModel')

const createPost = async (req, res) => {
    try {
        const { author, tweet } = req.query;
        const newPost = new Post({author, tweet});
        newPost.save();
        if(!newPost){
            return res.status(404).send("post not found");
        }
        res.status(202).send("Post uploaded");
    } catch (error) {
        res.status(404).send("error while uploading to db");
    }
}

const getAllData = async( req, res) => {
    const {author} = req.query
    try {
        const findPost = await Post.find({author});

        if(findPost.length === 0) return res.status(404).send({data : "No Post Found"});

        res.status(202).send({data : findPost })
    } catch (error) {
        res.status(402).send({data : "Data Not found" })
        
    }
}

module.exports = {createPost, getAllData};