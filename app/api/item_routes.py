from flask import Blueprint, render_template, jsonify, request
from ..forms.review_form import ReviewForm, ReviewImageForm
from app.models.items import db, Item, Item_Image
from app.models.reviews import db, Review, Review_Image
from flask_login import login_required, current_user

item_routes = Blueprint('items', __name__)

# TODO: FINISH VALIDATIONS
@item_routes.route('/<int:item_id>/reviews', methods=["POST"])
def post_new_review(item_id):
    '''Create a new review'''
    form = ReviewForm()
    item = Item.query.get(item_id)
    form['csrf_token'].data = request.cookies['csrf_token']

    if not item:
        return {'errors': 'Item does not exist'}, 404

    if form.validate_on_submit():
        data = form.data
        new_review = Review(
            body = data['body'],
            user_id = current_user.id,
            item_id= item_id
        )

        db.session.add(new_review)
        db.session.commit()

        created_review = Review.query.order_by(
            Review.id.desc()).first()
        return created_review.to_dict()