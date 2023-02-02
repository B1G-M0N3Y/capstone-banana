from flask import Blueprint, render_template, jsonify, request
from ..forms.review_form import ReviewForm, ReviewImageForm
from app.models.items import db, Item, Item_Image
from app.models.reviews import db, Review, Review_Image
from flask_login import login_required, current_user

item_routes = Blueprint('items', __name__)


@item_routes.route('/<int:item_id>/reviews', methods=["POST"])
def post_new_review(item_id):
    form = ReviewForm()
    data = form.data
    print(data)
    '''Create a new review'''
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




@item_routes.route('/<int:item_id>')
def get_item_by_id(item_id):
    '''Gets single item by its ID'''
    item = Item.query.get(item_id)

    if item:
        return item.to_dict()
    return {'errors': 'Item does not exist'}

@item_routes.route('')
def get_all_items():
    '''Get All Items'''
    items = Item.query.all()
    item_list = [item.to_dict() for item in items]
    return jsonify(item_list)
