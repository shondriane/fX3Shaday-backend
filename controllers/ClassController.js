const { Class,Review,User } = require('../models');

const GetAllClasses = async (req, res) => {
	try {
		const classes = await Class.findAll({
			include:[{
				model:Review,
				
				include:[{
					model:User,
					
				}]
			}]
		});
		res.send(classes);
	} catch (error) {
		throw error;
	}
};

const GetClassById = async (req, res) => {
	try {
		const classId = parseInt(req.params.class_id);
		const getClass = await Class.findByPk(classId,{
			include:[{
				model:Review,
				
				include:[{
					model:User,
					
				}]
			}]
		});
		res.send(getClass);
	} catch (error) {
		throw error;
	}
};


const CreateClass = async (req, res) => {
	try {
		const createClass = await Class.create(req.body);
		res.send(createClass);
	} catch (error) {
		throw error;
	}
};

const UpdateClassById = async (req, res) => {
	try {
		const classId = parseInt(req.params.class_id);
		const updatedClass = await Class.update(req.body, {
			where: { id: classId },
			returning: true
		});
		res.send(updatedClass);
	} catch (error) {
		throw error;
	}
};

const DeleteClassById = async (req, res) => {
	try {
		const classId = parseInt(req.params.class_id);
		await Class.destroy({ where: { id: classId } });
		res.send({ message: `Deleted class with an id of ${classId}` });
	} catch (error) {
		throw error;
	}
};

module.exports = {
	GetAllClasses,
	GetClassById,
	CreateClass,
	UpdateClassById,
	DeleteClassById
};
