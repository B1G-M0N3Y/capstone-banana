from sqlalchemy import func
from sqlalchemy.orm import validates
from .db import db, ma, environment, SCHEMA, add_prefix_for_prod

class Review(db.Model):
    __tablename__='reviews'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer(), db.ForeignKey("users.id"), nullable=False)
    item_id = db.Column(db.Integer(), db.ForeignKey("items.id"), nullable=False)
    body = db.Column(db.String(1000), nullable=False)

    images = db.relationship("Review_iImage", back_populates="review_id")

class Review_Image(db.Model):
    __tablename__='review_images'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    review_id = db.Column(db.Integer(), db.ForeignKey("reviews.id"), nullable=False)
    is_preview = db.Column(db.Boolean(), nullable = False)
    image_url = db.Column(db.String(255), nullable = False)
