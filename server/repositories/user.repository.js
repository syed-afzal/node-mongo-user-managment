const User = require('../models/user');

const usersRepository = {};

usersRepository.findOne = async (options) => {
    return User.findOne(options);
};

usersRepository.find = async (options) => {
    return await User.find(options);
};

usersRepository.saveNewUser  = async (user) => {
    const newUser = new User({ ...user, role: "basic" });
    return await newUser.save();
};

module.exports = usersRepository;
