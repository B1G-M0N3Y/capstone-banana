from ..models.review_likes import Review_Like, db
from ..models import User, environment

def seed_review_likes():
    like_1 = Review_Like(
        user_id=1,
        review_id=1
    )
    like_2 = Review_Like(
        user_id=1,
        review_id=2
    )
    like_3 = Review_Like(
        user_id=1,
        review_id=3
    )
    like_4 = Review_Like(
        user_id=1,
        review_id=4
    )
    like_5 = Review_Like(
        user_id=1,
        review_id=5
    )
    like_6 = Review_Like(
        user_id=2,
        review_id=1
    )
    like_7 = Review_Like(
        user_id=2,
        review_id=4
    )
    like_8 = Review_Like(
        user_id=3,
        review_id=3
    )

    db.session.add(like_1)
    db.session.add(like_2)
    db.session.add(like_3)
    db.session.add(like_4)
    db.session.add(like_5)
    db.session.add(like_6)
    db.session.add(like_7)
    db.session.add(like_8)

    db.session.commit()

def undo_review_likes():
    db.session.execute("DELETE FROM review_likes")
