const User = require("../models/user");

const user = async (req,res,next) => {

    const user = await User.findById(req.user._id);
    if(!user) return res.status(400).send("process failes: user without permissions");
    next();
};

module.exports = user;