from sqlalchemy.orm import validates
from .db import db

class OrderHistory(db.Model):
    __tablename__ = 'order_history'

    id = db.Column(db.Integer, primary_key=True);
    user_id = db.Column(db.Integer(), db.ForeignKey("users.id"), nullable=False);
    item_id = db.Column(db.Integer(), db.ForeignKey("items.id"), nullable=False);
    quantity = db.Column(db.Integer(), nullable = False);

    item = db.relationship("Item", back_populates="reviews")
    user = db.relationship("User", back_populates="reviews")

    def to_dict(self):
        return{
            'id': self.id,
            'user_id': self.user_id,
            'item_id': self.item_id,
            'quantity' : self.quantity
        }
