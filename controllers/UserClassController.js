
const { Class, User, UserClass } = require('../models');
const db = require ('../models/index.js')

const GetAllUserClassesWithPk = async (req, res) => {
	try {
		const userClasses = await db.sequelize.query('SELECT * FROM user_class',{
			type:db.sequelize.QueryTypes.SELECT
		})
		
		res.send(userClasses);
	} catch (error) {
		throw error;
	}
};

const GetAllUserClasses= async (req,res)=>{
	try{
		const userClasses = await UserClasses.findAll();
		res.send(userClasses)
	}
	catch (error){
throw error;
	}
}

const GetAllUsersAndClasses = async (req, res) => {
	try {
		const userClasses = await User.findAll({
			include: [
				{
					model: Classes,
					as: 'class_list',
					through: { attributes: [] }
				}
			]
		});
		res.send(userClasses);
	} catch (error) {
		throw error;
	}
};



const GetAllUsersAndClassesByUserId = async (req, res) => {
	try {
		const userId = parseInt(req.params.user_id);
		const userClassByUserId = await User.findAll({
			where: { id: userId },
			include: [
				{
					model: User,
					as: 'class_list',
					through: { attributes: [] }
				}
			]
		});
		res.send(userClassByUserId);
	} catch (error) {
		throw error;
	}
};

const GetAllUsersAndClassesByClassId = async (req, res) => {
	try {
		const classId = parseInt(req.params.class_id);
		const getUserClassByClassId = await Class.findAll({
			where: { id: classId },
			include: [
				{
					model: User,
					as: 'user_list',
					through: { attributes: [] }
				}
			]
		});
		res.send(getUserClassByClassId);
	} catch (error) {
		throw error;
	}
};

const CreateUserClass = async (req, res) => {
	try {
		const classListId = parseInt(req.params.user_id);
		const userListId = parseInt(req.params.class_id);
		const userClass = await UserClass.create({
			classListId,
			userListId,
			...req.body
		});
		res.send(userClass);
	} catch (error) {
		throw error;
	}
};

const UpdateUserClassById = async (req, res) => {
	try {
		const userClassId = parseInt(req.params.user_class_id);
		const updatedUserClass = await UserClass.update(req.body, {
			where: { id: userClassId },
			returning: true
		});
		res.send(updatedUserClass);
	} catch (error) {
		throw error;
	}
};

const DeleteUserClassById = async (req, res) => {
	try {
		const userClassId = parseInt(req.params.user_class_id);
		await UserClass.destroy({ where: { id: userClassId } });
		res.send({
			message: `Deleted user Class with an id of ${userClassId}`
		});
	} catch (error) {
		throw error;
	}
};

module.exports = {
	GetAllUserClassesWithPk,
	GetAllUserClasses,
	GetAllUsersAndClasses,
	GetAllUsersAndClassesByUserId,
	GetAllUsersAndClassesByClassId,
	CreateUserClass,
	UpdateUserClassById,
	DeleteUserClassById
};