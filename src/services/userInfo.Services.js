var userInfo = require('../models/userInfo.Model')



exports.getUserDetail = async function (query) {
    try {
        const userDetail = await userInfo.find(query);
        return userDetail;
    } catch (e) {
        // Log Errors
        console.log(e.message)
        throw Error('Error while Paginating userDetail')
    }
}

exports.getSingleUserInfo = async function (query) {
    try {
        const userInfoSearch = await userInfo.findById(query);
        return userInfoSearch;
    } catch (e) {
        // Log Errors
        console.log(e.message)
        throw Error('Error while Paginating userInfoSearch')
    }
}

exports.saveUserInfo = async function (query) {
    try {
        const newUserDetail = new userInfo(query);
        const saveNewUserDetail = await newUserDetail.save();
        return saveNewUserDetail;

    } catch (e) {
        // Log Errors
        console.log(e.message)
        throw Error('Error while Paginating saveUserInfo')
    }
}

exports.updateUserInfo = async function (id,postUpdateUserData) {
    try {
        const changeUserData = await userInfo.findById(id);
        
        changeUserData.userAddress = postUpdateUserData.userAddress;
        changeUserData.city =postUpdateUserData.city;
        changeUserData.country = postUpdateUserData.country;
        changeUserData.postalCode = postUpdateUserData.postalCode;
        changeUserData.street = postUpdateUserData.street;
        changeUserData.houseNumber = postUpdateUserData.houseNumber;

        const updateUserNow= await changeUserData.save();

        return updateUserNow
    } catch (e) {
        // Log Errors
        console.log(e.message)
        throw Error('Error while Paginating updateUserNow')
    }
}

exports.removeUserInfo = async function (query) {
    try {
        const userInfoRemove = await userInfo.findByIdAndDelete(query);

        return userInfoRemove;
    } catch (e) {
        // Log Errors
        console.log(e.message)
        throw Error('Error while Paginating userInfoRemove')
    }
}

exports.getUserByid = async function (id) {
    try {
        const userInfoSearch= await userInfo.find({ userId: id });
        return userInfoSearch;
    } catch (e) {
        // Log Errors
        console.log(e.message)
        throw Error('Error while Paginating userInfoSearch')
    }
}