from flask import Blueprint, render_template, jsonify, request
from ..forms import ReviewForm, ReviewImageForm
from app.models.items import db, Item, Item_Image
from flask_login import login_required, current_user

item_routes = Blueprint()

@item_routes.route('/<int:item_id>/reviews', methods=["POST"])
def post_new_review(item_id):
    '''Create a new review'''
    form = ReviewForm()
    item = Item.query.get(item_id)
    form['csrf_token'].data = request.cookies['csrf_token']

    
