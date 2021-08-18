const Post = require("../models/post");
const User = require("../models/user");

const createPost = async (req,res) => {

    if(!req.body.text || !req.body.hashtag) return res.status(400).send("process failed: incomplete data");

    const post = new Post({

        userId: req.body.userId,
        text: req.body.text,
        hashtag: req.body.hashtag,
        dbStatus: true,

    });

    const result = await post.save();
    if(!result) return res.status(400).send("failed to create post");
    return res.status(200).send({result});


};

const listPost = async (req,res) => {
    const post = await Post.find();
    if(!post || post === 0)return res.status(400).send("No post");
    return res.status(200).send({post});

};

module.exports = {createPost, listPost};
