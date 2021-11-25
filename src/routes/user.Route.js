const express = require("express");
const router = express.Router();
const Users = require("../models/user.Model");

// @route   GET /user
// @desc    user post route
// @access  Public


router.get("/", async (req, res) => {
  try {
    const user = await Users.find();
    res.json(user);
  } catch (error) {
    res.send("Error", +error);
  }
});

// @route   GET /user
// @desc    user Search post route
// @access  Public

  router.get("/:id", async (req, res) => {
  try {
    const userSearch = await Users.findById(req.params.id);
    res.json(userSearch);
  } catch (error) {
    res.send("Error", +error);
  }
});


// @route   Post /user
// @desc    Save Data In Database
// @access  Public

router.post('/', async(req,res) => {
  console.log(req.body.email);
  
    const newUser = new Users({
        email: req.body.email,
        password: req.body.password,
        title: req.body.title,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })

    try{
        const saveUser =  await newUser.save() 
        res.json(saveUser)
    }catch(err){
        res.send('Error')
    }
})



// @route   Patch /user
// @desc    Edit And Update Record
// @access  Private

router.patch("/:id", async (req, res) => {
  try {
    const searchUser = await Users.findById(req.params.id)
    searchUser.email = req.body.email
    const changeData = await searchUser.save()
    res.json(changeData)
  } catch (err) {
    res.send("Error", +err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const userSearch = await Users.findByIdAndDelete(req.params.id);
    res.json({msg:'Record Delete Successfully'});
  } catch (error) {
    res.send("Error", +error);
  }
});
module.exports = router;
