from sqlalchemy import func
from sqlalchemy.orm import validates
from .db import db

class Review(db.Model):
    __tablename__='reviews'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer(), db.ForeignKey("users.id"), nullable=False)
    item_id = db.Column(db.Integer(), db.ForeignKey("items.id"), nullable=False)
    body = db.Column(db.String(1000), nullable=False)

    item = db.relationship("Item", back_populates="reviews")
    user = db.relationship("User", back_populates="reviews")
    images = db.relationship("Review_Image", back_populates="review", cascade = "all,delete")
    likes = db.relationship("Review_Like", back_populates="review", cascade = "all,delete")

    def to_dict(self):
        return{
            'id': self.id,
            'user_id': self.user_id,
            'item_id': self.item_id,
            'body': self.body,
            'user': self.user.to_dict_self(),
            'images': [image.to_dict() for image in self.images],
            'likes': [like.to_dict() for like in self.likes]
        }


class Review_Image(db.Model):
    __tablename__='review_images'

    id = db.Column(db.Integer, primary_key=True)
    review_id = db.Column(db.Integer(), db.ForeignKey("reviews.id"), nullable=False)
    is_preview = db.Column(db.Boolean(), nullable = False)
    image_url = db.Column(db.String(255), nullable = False)

    review = db.relationship("Review", back_populates="images")

    def to_dict(self):
        return{
            'id': self.id,
            'review_id': self.review_id,
            'is_preview': self.is_preview,
            'image_url': self.image_url
        }
