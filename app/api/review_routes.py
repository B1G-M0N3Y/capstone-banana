from flask import Blueprint, render_template, jsonify, request
from ..forms.review_form import ReviewForm, ReviewImageForm
from app.models.reviews import db, Review, Review_Image
from app.models.review_likes import db, Review_Like
from flask_login import login_required, current_user
from ..models import User
review_routes = Blueprint('reviews', __name__)


@review_routes.route('/<int:review_id>/images', methods=["POST"])
def add_new_image_to_review(review_id):
    review = Review.query.get(review_id)

    if review.user_id != current_user.id:
        return {'errors': 'You do not have permission to post images on this review'}

    form = ReviewImageForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_image = Review_Image(
            image_url = data['image_url'],
            is_preview = data['is_preview'],
            review_id = review_id
        )

        db.session.add(new_image)
        db.session.commit()

        return review.to_dict()


@review_routes.route('/<int:review_id>/images/<int:image_id>', methods=["DELETE"])
def remove_image_from_review(review_id, image_id):
    image = Review_Image.query.get(image_id)
    review = Review.query.get(review_id)

    if not review:
        return {'errors': 'Review does not exist'}, 404

    if not image:
        return {'errors': 'Image does not exist'}, 404

    if not (review.user_id == current_user.id):
        return {'errors': 'You do not have permission to delete this image'}, 403

    if review:
        db.session.delete(review)
        db.session.commit()
        return {"message": ["Message deleted."]}, 200


@review_routes.route('/<int:review_id>/likes', methods=["POST"])
def add_like_to_review(review_id):
    review = Review.query.get(review_id)

    if not review:
        return {'errors': 'Review does not exist'}, 404

    if not current_user.id:
        return {'errors': 'You must be logged in to like a review'}

    new_like = Review_Like(
        user_id = current_user.id,
        review_id = review_id
    )

    db.session.add(new_like)
    db.session.commit()

    return new_like.to_dict()


@review_routes.route('/<int:review_id>')
def get_review_by_id(review_id):
    review = Review.query.get(review_id)

    if review:
        return review.to_dict()
    return {'errors': 'Review does not exist'}, 404


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
        review_list.append(review.to_dict())

    return jsonify(review_list)


@review_routes.route('/<int:review_id>', methods=["PUT"])
def edit_review_by_id(review_id):
    review = Review.query.get(review_id)

    form = ReviewForm()

    if not review:
        return {'errors': 'Review does not exist'}, 404

    if review.user_id != current_user.id:
        return {'errors': 'You do not have permission to edit this review'}, 403

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data

        # change body of existing review
        body = data['body']
        review.body = body

        db.session.add(review)
        db.session.commit()
        return jsonify(review.to_dict())


@review_routes.route('/<int:review_id>', methods=["DELETE"])
def delete_review_by_id(review_id):
    review = Review.query.get(review_id)

    if not review:
        return {'errors': 'Review does not exist'}, 404

    if not (review.user_id == current_user.id):
        return {'errors': 'You do not have permission to delete this review'}, 403

    if review:

        db.session.delete(review)
        db.session.commit()
        return {"message": ["Message deleted."]}, 200
