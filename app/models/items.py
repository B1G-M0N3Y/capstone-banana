from sqlalchemy import func
from sqlalchemy.orm import validates
from .db import db, ma, environment, SCHEMA, add_prefix_for_prod

class Item(db.Model):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(25), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    potassium = db.Column(db.Integer(), nullable=False)
    price = db.Column(db.Float(), nullable=False)
    ripeness = db.Column(db.Float(), nullable=False)
    size = db.Column(db.Float(), nullable=False)
    cameras = db.Column(db.Integer(), nullable=False)
    peeled = db.Column(db.Boolean(), nullable=False)

    reviews = db.relationship('Review', back_populates='item_id')
    images = db.relationship('Item_Image', back_populates='item_id')

    def to_dict(self):
        return{
            'id': self.id,
            'name': self.name,
            'description': self.name,
            'potassium': self.potassium,
            'price' : self.price
        }

class Item_Image(db.Model):
    __tablename__ = 'item_images'

    id = db.Column(db.Integer, primary_key=True)
    item_id = db.Column(db.Integer(), db.ForeignKey('items.id'), nullable=False)
    is_preview = db.Column(db.Boolean(), nullable = False)
    image_url = db.Column(db.String(255), nullable = False)

    def to_dict(self):
        return{
            'id': self.id,
            'item_id': self.review_id,
            'is_preview': self.is_preview,
            'image_url': self.image_url
        }
