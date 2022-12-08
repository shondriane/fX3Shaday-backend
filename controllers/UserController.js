
const User = require('../models/user')

const GetAllUsers = async(req,res)=>{
  try{
    const users= await User.findAll()
    res.send(users)
    console.log(users)
  }catch(error){
    throw error
  }
}

// const GetAllUsers = async (req, res) => {
//   try {
//     const users = await User.findAll()
//     res.send(users)
//   } catch (error) {
//     throw error
//   }
// }

const GetUserById = async (req, res) => {
  try {
    const userId = parseInt(req.params.user_id)
    const user = await User.findByPk(userId)
    res.send(user)
  } catch (error) {
    throw error
  }
}

const CreateUser = async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.send(user)
  } catch (error) {
    throw error
  }
}

const UpdateUserById = async (req, res) => {
  try {
    const userId = parseInt(req.params.user_id)
    const updatedUser = await User.update(req.body, {
      where: { id: userId },
      returning: true
    })
    res.send(updatedUser)
  } catch (error) {
    throw error
  }
}

const DeleteUserById = async (req, res) => {
  try {
    const userId = parseInt(req.params.user_id)
    await User.destroy({ where: { id: userId } })
    res.send({ message: `Deleted user with an id of ${userId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllUsers,
  GetUserById,
  CreateUser,
  UpdateUserById,
  DeleteUserById
}