const express = require("express");
var UserService = require('../services/user.Services')    
var Users = require('../models/user.Model')
 const UserLogin = require('../models/login')
const {validationResult}=require('express-validator/check')


exports.saveLoginUserInfo = async function (req, res) {

    const newUser ={
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password,
        cpassword: req.body.cpassword
      };
  const saveRegisterUser = await UserService.saveLoginUsersData(newUser);
  console.log(saveRegisterUser);

  if (!saveRegisterUser) {
    res.status(404).json({ errorMsg: "User Register does Not Save" , status: false });
  } else {
    res.status(201).json({
      saveRegisterUser,
      successMsg:"User Register has been saved successfully",
      status: true,
    });
  }
};


exports.getLoginUsers = async function (req, res) {
  var user = await UserService.getLoginUser({})
  
    if (!user) {
      res.status(404).json({ errorMsg: "userLogin does not exist", status: false });
    } else {
      res
        .status(200)
        .json({ user: user, successMsg: "userLogin Records Listing", status: true });
    }
  };
  











exports.getUsers = async function (req, res) {
var user = await UserService.getUsers({})

  if (!user) {
    res.status(404).json({ errorMsg: "user does not exist", status: false });
  } else {
    res
      .status(200)
      .json({ user: user, successMsg: "Records Listing", status: true });
  }
};

exports.getSingleUser = async function (req, res) {

  const userSearch = await UserService.getOnlyUser(req.params.id)

  if (!userSearch) {
    res.status(404).json({ errorMsg: "Record Not Fond", status: false });
  } else {
    res
      .status(200)
      .json({ userSearch, successMsg: "Record Available Here", status: true });
  }
};

exports.saveUserInfo = async function (req, res) {
  const errors = validationResult(req);
  

    const newUser ={
        email: req.body.email,
        password: req.body.password,
        title: req.body.title,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      };

  const saveUser = await UserService.saveUsersData(newUser);

  
  if (!saveUser) {
    res.status(404).json({ errorMsg: "Record does not save", status: false });
  } else {
    res.status(201).json({
      saveUser,
      successMsg: "Record has been saved successfully",
      status: true,
    });
  }
};

exports.updateUserInfo = async function (req, res) {
const postManData={}
postManData.email = req.body.email;
postManData.password = req.body.password;
postManData.title = req.body.title;
postManData.firstName = req.body.firstName;
postManData.lastName = req.body.lastName;

 const updateRecord = await UserService.updateUser(req.params.id,postManData)

  if (!updateRecord) {
    res.status(404).json({ errorMsg: "Record does not Remove", status: false });
  } else {
    res
      .status(200)
      .json({
        updateRecord,
        successMsg: "Record has been Remove successfully",
        status: true,
      });
  }
};

exports.removeUser = async function(req,res){

    
  const userRemove = await UserService.deleteUser(req.params.id);
  if(!userRemove){
    res.status(404).json({ errorMsg:'Record does not Remove', status:false})
  }else{
    res.status(200).json({ userRemove,successMsg:'Record has been Remove successfully',status:true})
  }
}