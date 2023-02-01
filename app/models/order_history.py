from sqlalchemy.orm import validates
from sqlalchemy.sql import func
from .db import db

class Order_History(db.Model):
    __tablename__ = 'order_history'

    id = db.Column(db.Integer, primary_key=True);
    user_id = db.Column(db.Integer(), db.ForeignKey("users.id"), nullable=False);
    item_id = db.Column(db.Integer(), db.ForeignKey("items.id"), nullable=False);
    quantity = db.Column(db.Integer(), nullable = False);
    time_created = db.Column(db.DateTime(timezone=True), server_default=func.now())
    time_updated = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    item = db.relationship("Item", back_populates="orders")
    user = db.relationship("User", back_populates="orders")

    def to_dict(self):
        return{
            'id': self.id,
            'item': self.item.to_dict(),
            'quantity' : self.quantity,
            'total': (self.item.price * self.quantity),
            'date': self.time_created
        }
