const userRepository = require('../repositories/user.repository');
const messages = require('../utils/server.messages');


const userService = {};

userService.findOne = async (options) => {
    return await userRepository.findOne(options)
};

userService.find = async (option) => {
    return await userRepository.find(options)
};

userService.findById = async (id) => {
    return await userRepository.findById(id)
};

userService.findByIdAndDelete = async (id) => {
    return await userRepository.findByIdAndDelete(id)
};

userService.saveNewUser = async (user) => {
    return await userRepository.saveNewUser(user)
};

userService.findByIdAndUpdate = async (id, dataToUpdate, options) => {
    return await userRepository.findByIdAndUpdate(id,
        dataToUpdate,
        options
        );
};


module.exports = userService;
