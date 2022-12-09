
const Router = require('express').Router();
const controller = require('../controllers/ReviewController');
const middleware = require('../middleware');

Router.get('/', controller.GetAllReviews);
Router.get('/class/:class_id', controller.GetReviewsByClassId);
Router.get('/user/:user_id', controller.GetReviewByUserId);
Router.get('/:review_id', controller.GetReviewsById);
Router.post(
	'/',
	middleware.stripToken,
	middleware.verifyToken,
	controller.CreateReview
);
Router.put(
	'/update/:review_id',
	middleware.stripToken,
	middleware.verifyToken,
	controller.UpdateReviewById
);
Router.delete(
	'/:review_id',
	middleware.stripToken,
	middleware.verifyToken,
	controller.DeleteReviewById
);

module.exports = Router;
