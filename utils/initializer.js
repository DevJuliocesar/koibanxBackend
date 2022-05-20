const User = require('../models/user.model');
const Store = require('../models/store.model');
const logger = require('../utils/logger');

const storeSeed = require('./store.json');


async function createNewUser() {
    let user = new User();
    user.username = "test@koibanx.com";
    user.password = "admin";
    await User.create(user);
    logger.info("Test User created");
}

async function createNewStore() {
    await Store.create(storeSeed);
    logger.info("Test Store created");
}

exports.init = async function () {
    if (!await User.countDocuments({ "username": "test@koibanx.com" })) {
        await createNewUser();
    }

    if (await Store.countDocuments() < 1) {
        await createNewStore();
    }

}
