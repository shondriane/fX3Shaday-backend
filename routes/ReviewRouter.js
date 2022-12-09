


GetAllReviews,
GetReviewsById,
GetReviewByUserId,
GetReviewsByClassId,
CreateReview,
UpdateReviewById,
DeleteReviewById


const Router = require('express').Router();
const controller = require('../controllers/ReviewController');
const middleware = require('../middleware');

Router.get('/', controller.GetAllReviews);
Router.get('/review/:class_id', controller.GetReviewsByClassId);
Router.get('/user/:user_id', controller.GetReviewByUserId);
Router.get('/:activity_id', controller.GetReviewsById);
Router.post(
	'/',
	middleware.stripToken,
	middleware.verifyToken,
	controller.CreateReview
);
Router.put(
	'/:activity_id',
	middleware.stripToken,
	middleware.verifyToken,
	controller.UpdateReviewById
);
Router.delete(
	'/:activity_id',
	middleware.stripToken,
	middleware.verifyToken,
	controller.DeleteReviewById
);

module.exports = Router;
