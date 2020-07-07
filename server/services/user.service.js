const userRepository = require('../repositories/user.repository');
const messages = require('../utils/server.messages');


const userService = {};

userService.findOne = async (options) => {
    return await userRepository.findOne(options)
};

userService.find = async (option) => {
    return await userRepository.find(options)
};



module.exports = userService;
