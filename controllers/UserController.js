
const {User,Review} = require('../models')
// const multer = require('multer')

const GetAllUsers = async(req,res)=>{
  try{
    const users= await User.findAll({
      include:[{
				model:Review,
				as:"reviews"
				
			}]
    })
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
    const user = await User.create(req.body,req.file)
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

// const storage = multer.diskStorage({
//   destination:(req,file,cb)=>{
// cb(null,'Images')
//   },
//   filename: (req,file,cb)=>{
//     cb(null,Date.now() + path.extreme(file.originalname))
//   }
// })
// const Upload = multer({
//   storage:storage,
//   limits:{
//     fileSize: '1000000'
//   },
//   fileFilter:(req,file,cb)=>{
//     const fileTypes = /jpeg|jpg|png|gif/
//     const mimeType= fileTypes.test(file.mimetype)
//     const extname=fileTypes.test(path.extname(file.originalname))

//     if(mimeType && extname){
//       return cb(null,true)
//     }
//     cb('Must be jpeg, jpg, png or gif file format to upload')
//   }
// }).single('image')

module.exports = {
  GetAllUsers,
  GetUserById,
  CreateUser,
  UpdateUserById,
  DeleteUserById
  // Upload,
  
}