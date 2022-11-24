from flask import Blueprint, render_template, jsonify, request
# from ..forms import ReviewForm, ReviewImageForm
from app.models.reviews import db
from flask_login import login_required, current_user
from ..models import User
review_routes = Blueprint('reviews', __name__)

@review_routes.route('/current', methods=["GET"])
def get_current_user_reviews():
    '''
    Get all reviews posted by a logged in user
    '''
    user = User.query.get(current_user.id)

    if not user:
        return {"message": ["User couldn't be found."]}, 404
    reviews = user.reviews
    review_list = []

    for review in reviews:
        review_body = review.body
        review_list.append(review.to_dict())

    print(review_list, "****************************************************")
    return jsonify(review_list)
