from .db import db

class Review_Like(db.Model):
    __tablename__ = 'review_likes'

    id = db.Column(db.Integer, primary_key=True)
    review_id = db.Column(db.Integer, db.ForeignKey("reviews.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    user = db.relationship("User", back_populates="likes")
    review = db.relationship("Review", back_populates="likes")

    def to_dict(self):
        return{
            'id': self.id,
            'review_id':self.review_id,
            'user_id': self.user_id
        }
