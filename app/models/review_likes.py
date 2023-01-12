from .db import db

class Review_Like(db.Model):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True)
    review_id = db.Column(db.Integer, db.ForeignKey("reviews.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    review = db.relationship("User", back_populates="likes")
    review = db.relationship("Review", back_populates="likes")

    def to_dict(self):
        return{
            'id': self.id,
            'review_id':self.review_id,
            'user_id': self.user_id
        }
