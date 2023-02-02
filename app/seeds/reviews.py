from ..models.reviews import Review, Review_Image, db
from ..models import User, environment

def seed_reviews():
    review_1 = Review(
        user_id=1,
        item_id=1,
        body="This is my first Banana ever and I love how a-peeling it is! \
            No one told me that it would be this easy to use, but sure enough \
            even a monkey could use it."
    )
    review_2 = Review(
        user_id=2,
        item_id=2,
        body="Wow! Banana has really outdone themselves this time. The extra cameras \
            really are a nice touch. I thought I wouldn't need the extra potassium when \
            I bought it but it really has come in handy. I use the extra potassium every \
            day!"
    )
    review_3 = Review(
        user_id=3,
        item_id=3,
        body="This is just simply too many Bananas. Banana has really gone off the deep end \
            with this product. They better reel it in if they ever want my business again"
    )
    review_4 = Review(
        user_id=1,
        item_id=4,
        body="I bought this for my grandson and he uses it every day mostly to take pictures \
            of the family dog but also to take pictures of the family too and sometimes he \
            plays games on it that I don't really understand but I am just happy to see him \
            happy and not sitting in his room listening to that rap 'music' I dont know how he \
            likes the stuff but his mother says I am not to judge or I wont be invited to go \
            carolling with them on Christmas eve this year which is something I cant miss because \
            I think I'm gonna get the big solo this year for silent night which is the silent part."
    )
    review_5 = Review(
        user_id=1,
        item_id=5,
        body="I can take my Banano with me everywhere I go. It fits right into my pocket. So much \
            potassium for such a small package."
    )

    db.session.add(review_1)
    db.session.add(review_2)
    db.session.add(review_3)
    db.session.add(review_4)
    db.session.add(review_5)

    db.session.commit()

def seed_review_images():
    review_image_1 = Review_Image(
        review_id=1,
        is_preview=True,
        image_url='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/1200px-Banana-Single.jpg'
    )
    review_image_2 = Review_Image(
        review_id=1,
        is_preview=False,
        image_url='https://soranews24.com/wp-content/uploads/sites/3/2020/11/Banana-Hammer-Japan-iron-bronze-technology-frozen-Japanese-shop-news-1.png'
    )
    review_image_3 = Review_Image(
        review_id=2,
        is_preview=True,
        image_url='https://www.freethink.com/wp-content/uploads/2021/06/disease-resistant-banana_opengraph.jpg'
    )
    review_image_4 = Review_Image(
        review_id=2,
        is_preview=False,
        image_url='https://www.canberratimes.com.au/images/transform/v1/crop/frm/jess.wallace/fd4814a4-7875-4aff-9a4a-3213b7d53c81.jpg/r248_546_3762_2641_w1200_h678_fmax.jpg'
    )
    review_image_5 = Review_Image(
        review_id=3,
        is_preview=True,
        image_url='https://assets.entrepreneur.com/content/3x2/2000/1605817491-GettyImages-1131356455.jpg'
    )
    review_image_6 = Review_Image(
        review_id=3,
        is_preview=False,
        image_url='https://img.freepik.com/free-vector/vector-ripe-yellow-banana-bunch-isolated-white-background_1284-45456.jpg'
    )
    review_image_7 = Review_Image(
        review_id=5,
        is_preview=True,
        image_url='https://images.fairtrade.net/_articleFull/bananbruiser.png'
    )

    db.session.add(review_image_1)
    db.session.add(review_image_2)
    db.session.add(review_image_3)
    db.session.add(review_image_4)
    db.session.add(review_image_5)
    db.session.add(review_image_6)
    db.session.add(review_image_7)

    db.session.commit()

def undo_reviews():
    db.session.execute("DELETE FROM reviews")
    db.session.commit()

def undo_review_images():
    db.session.execute("DELETE FROM review_images")
    db.session.commit()
