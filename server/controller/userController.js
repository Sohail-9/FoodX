const User = require('../model/userModel')

const createUser = async (req, res) => {
    try {
        const { email, password, username } = req.query;
        const findUser = await User.findOne({ email });
        if (!findUser) {
            const newUser = new User({ email, password, username });
            newUser.save();
            return res.status(200).send({msg : "new user created", data : newUser});
        }
        return res.status(400).send("user exists");
    } catch (error) {
        res.status(404).send("server not found");
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.query;
        const findUser = await User.findOne({ email });
        if (!findUser) {
            return res.status(404).send({msg : "user not found"});
        }
        return res.status(200).send({msg : "user exists", data: findUser});
    } catch (error) {
        res.status(404).send("server not found");
    }
}

module.exports = {createUser, loginUser};