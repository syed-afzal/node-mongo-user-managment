const User = require('../models/user');

const usersRepository = {};

usersRepository.findOne = async (options) => {
    return User.findOne(options);
};

usersRepository.find = async (options) => {
    return await User.find(options);
};

usersRepository.findById = async (id) => {
    return await User.findById(id);
};

usersRepository.findByIdAndDelete = async (id) => {
    return await User.findByIdAndDelete(id)
};

usersRepository.saveNewUser  = async (user) => {
    const newUser = new User({ ...user, role: "basic" });
    return await newUser.save();
};

usersRepository.findByIdAndUpdate  = async (id, updateData, options) => {
    return await User.findByIdAndUpdate(id, updateData, options);
};

module.exports = usersRepository;
