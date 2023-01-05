
const { Review } = require('../models');

const GetAllReviews = async (req, res) => {
	try {
		const reviews = await Review.findAll();
		res.send(reviews);
	} catch (error) {
		throw error;
	}
};

const GetReviewsById = async (req, res) => {
	try {
		const reviewId = parseInt(req.params.review_id);
		const review = await Review.findByPk(reviewId);
		res.send(review);
	} catch (error) {
		throw error;
	}
};

const GetReviewsByClassId = async (req, res) => {
	try {
		const classId = parseInt(req.params.class_id);
		const reviews = await Review.findAll({
			where: { classId: classId }
		});
		res.send(reviews);
	} catch (error) {
		throw error;
	}
};

const GetReviewByUserId = async (req, res) => {
	try {
		const userId = parseInt(req.params.user_id);
		const review = await Review.findAll({ where: { userId: userId } });
		res.send(review);
	} catch (error) {
		throw error;
	}
};

const CreateReview = async (req, res) => {
	try {
		const review= await Review.create(req.body);
		res.send(review);
	} catch (error) {
		throw error;
	}
};

const UpdateReviewById = async (req, res) => {
	try {
		const reviewId = parseInt(req.params.review_id);
		const updatedReview = await Review.update(req.body, {
			where: { id: reviewId },
			returning: true
		});
		res.send(updatedReview);
	} catch (error) {
		throw error;
	}
};

const DeleteReviewById = async (req, res) => {
	try {
		const reviewId = parseInt(req.params.review_id);
		await Review.destroy({ where: { id: reviewId } });
		res.send({ message: `Deleted Review with an id of ${reviewId}` });
	} catch (error) {
		throw error;
	}
};

module.exports = {
	GetAllReviews,
	GetReviewsById,
	GetReviewByUserId,
	GetReviewsByClassId,
	CreateReview,
	UpdateReviewById,
	DeleteReviewById
};