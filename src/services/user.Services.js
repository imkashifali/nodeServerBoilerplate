var Users = require('../models/user.Model')
var UserLogin = require('../models/login')


exports.saveLoginUsersData = async function (query) {
    try {
        const newUser = new UserLogin(query);
        const saveUser = await newUser.save();
        return saveUser;
    } catch (e) {
        // Log Errors
        console.log(e.message)
        throw Error('Error while Paginating Users')
    }
}


exports.getLoginUser = async function (query) {
    try {
        const user = await UserLogin.find(query);
        return user;
    } catch (e) {
        // Log Errors
        console.log(e.message)
        throw Error('Error while Paginating Users')
    }
}









exports.getUsers = async function (query) {
    try {
        const user = await Users.find(query);
        return user;
    } catch (e) {
        // Log Errors
        console.log(e.message)
        throw Error('Error while Paginating Users')
    }
}

exports.getOnlyUser = async function (query) {
    try {
        const userSearch = await Users.findById(query);
        return userSearch;
    } catch (e) {
        // Log Errors
        console.log(e.message)
        throw Error('Error while Paginating Users')
    }
}

exports.saveUsersData = async function (query) {
    try {
        const newUser = new Users(query);
        const saveUser = await newUser.save();
        return saveUser;
    } catch (e) {
        // Log Errors
        console.log(e.message)
        throw Error('Error while Paginating Users')
    }
}


exports.updateUser = async function (id,postManData) {
    try {
        const changeData = await Users.findById(id);

        changeData.email = postManData.email;
        changeData.password =postManData.password;
        changeData.title = postManData.title;
        changeData.firstName = postManData.firstName;
        changeData.lastName = postManData.lastName;

        const updateRecord = await changeData.save();


        console.log(updateRecord);

        return updateRecord
    } catch (e) {
        // Log Errors
        console.log(e.message)
        throw Error('Error while Paginating Users')
    }
}


exports.deleteUser = async function (query) {
    try {
        const userRemove = await Users.findByIdAndDelete(query);

        return userSearch;
    } catch (e) {
        // Log Errors
        console.log(e.message)
        throw Error('Error while Paginating Users')
    }
}