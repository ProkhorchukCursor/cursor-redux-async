const User = require("../models/user");

const listUsers = async () => {
 return await User.find();
};

const removeUser = async (userId) => {
 return User.findByIdAndRemove({ _id: userId });
};

const addUser = async (body) => {
 return User.create(body);
};

module.exports = {
 listUsers,
 removeUser,
 addUser,
};
