const User_em = require('../models/data_user')
const asyncHandler = require('express-async-handler')

// get all product
const getUsers = asyncHandler(async(req, res) => {
    try {
        const Users = await User_em.find({});
        res.status(200).json(Users);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

// get a single product
const getUser = asyncHandler(async(req, res) =>{
    try {
        const {id} = req.params;
        const User = await User_em.findById(id);
        res.status(200).json(User);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

// create a product
const createUser = asyncHandler(async(req, res) => {
    try {
        const User = await User_em.create(req.body)
        res.status(200).json(User);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

// update a product
const updateUser = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const User = await User_em.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if(!User){
            res.status(404);
            throw new Error(`cannot find any product with ID ${id}`);
        }
        const updateUser = await User_em.findById(id);
        res.status(200).json(updateUser);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

const deleteUser = asyncHandler(async(req, res) =>{
    try {
        const {id} = req.params;
        const User = await User_em.findByIdAndDelete(id);
        if(!User){
            res.status(404);
            throw new Error(`cannot find any product with ID ${id}`);
        }
        res.status(200).json(User);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}