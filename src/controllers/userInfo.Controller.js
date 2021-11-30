const express = require("express");
var UserInfoService = require("../services/userInfo.Services");

exports.getUserDetail = async function (req, res) {
  var getUser = await UserInfoService.getUserDetail({});

  if (!getUser) {
    res.status(404).json({ errorMsg: "getUser does not exist", status: false });
  } else {
    res
      .status(200)
      .json({ getUser, successMsg: "Records Listing", status: true });
  }
};

exports.getSingleUserInfo = async function (req, res) {
    const SingleUserInfo = await UserInfoService.getSingleUserInfo(req.params.id);
  
    if (!SingleUserInfo) {
      res.status(404).json({ errorMsg: "Record Not Fond", status: false });
    } else {
      res
        .status(200)
        .json({
            SingleUserInfo,
          successMsg: "Record Available Here",
          status: true,
        });
    }
  };
  
  exports.saveUserInfo = async function (req, res) {
    const newUserInfo = {
      userId : req.body.userId,
      userAddress: req.body.userAddress,
      city: req.body.city,
      country: req.body.country,
      postalCode: req.body.postalCode,
      street: req.body.street,
      houseNumber: req.body.houseNumber
    };
  
    const saveNewUserInfo = await UserInfoService.saveUserInfo(newUserInfo);
  
    if (!saveNewUserInfo) {
      res.status(404).json({ errorMsg: "saveNewUserInfo does not save", status: false });
    } else {
      res.status(201).json({
        saveNewUserInfo,
        successMsg: "saveNewUserInfo has been saved successfully",
        status: true,
      });
    }
  };
  
  exports.updateUserInfo = async function (req, res) {
    const postUpdateUserData = {};
    postUpdateUserData.userAddress = req.body.userAddress;
    postUpdateUserData.city = req.body.city;
    postUpdateUserData.country = req.body.country;
    postUpdateUserData.postalCode = req.body.postalCode;
    postUpdateUserData.street = req.body.street;
    postUpdateUserData.houseNumber = req.body.houseNumber;
  
    const updateRecord = await UserInfoService.updateUserInfo(
      req.params.id,
      postUpdateUserData
    );
  
    if (!updateRecord) {
      res
        .status(404)
        .json({ errorMsg: "Record does not Updated", status: false });
    } else {
      res.status(200).json({
        updateRecord,
        successMsg: "Record has been Updated successfully",
        status: true,
      });
    }
  };
  
  exports.removeUserInfo = async function (req, res) {

    const UserInfoRemove = await UserInfoService.removeUserInfo(req.params.id);
  
    if (!UserInfoRemove) {
      res.status(404).json({ errorMsg: "Record does not Remove", status: false });
    } else {
      res
        .status(200)
        .json({
          UserInfoRemove,
          successMsg: "Record has been Remove successfully",
          status: true,
        });
    }
  };
  
   
  exports.getUserByid = async function (req, res) {
    const UserByid = await UserInfoService.getUserByid(req.params.id);

    if(!UserByid){
        res.status(404).json({errorMsg: "Record Not Fond", status: false })
      }else{
        res.status(200).json({ UserByid, successMsg: "Record Available Here",status: true})
      }
  
  };