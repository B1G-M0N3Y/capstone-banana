from ..models import User, environment
from ..models.items import Item, Item_Image, db
from sqlalchemy import func


def seed_items():
    banana = Item(
        name="Banana 14",
        description = "Our newest banana yet.",
        potassium = 455,
        price = 1299.99,
        ripeness = .79,
        size = 7.2,
        cameras = 1,
        peeled = False
    )
    banana_pro = Item(
        name="Banana 14 Pro",
        description = 'More potassium than ever before. 2 extra cameras, and a sleeker design',
        potassium = 489,
        price = 1599.99,
        ripeness = .79,
        size = 8.1,
        cameras = 3,
        peeled = False
    )
    banana_bunch = Item(
        name="Banana Bunch",
        description = "Imagine a bunch of bananas that all ripen at the same time. Well imagine no more",
        potassium = 489,
        price = 2199.99,
        ripeness = .88,
        size = 15.1,
        cameras = 1,
        peeled = False
    )
    old_banana = Item(
        name = "Banana X",
        description = "This banana is old and less expensive. You probably don't want it.",
        potassium = 418,
        price = 899.99,
        ripeness = .64,
        size = 7.2,
        cameras = 2,
        peeled = True
    )
    banano = Item(
        name = "Banano",
        description = "A banana for people on the go.",
        potassium = 412,
        price = 259.99,
        ripeness = .34,
        size = 2.8,
        cameras = 0,
        peeled = False
    )
    banana_peel = Item(
        name = "Banana Peel",
        description = "The tastiest part of the banana.",
        potassium = 15,
        price= 599.99,
        ripeness=.67,
        size= 7.2,
        cameras = 0,
        peeled = True
    )

    db.session.add(banana)
    db.session.add(banana_pro)
    db.session.add(banana_bunch)
    db.session.add(old_banana)
    db.session.add(banano)
    db.session.add(banana_peel)

    db.session.commit()

def seed_item_images():
    banana_image_1 = Item_Image(
        item_id = 1,
        is_preview = True,
        image_url="https://i.imgur.com/gagWTDt.jpg",
    )
    banana_image_2 = Item_Image(
        item_id = 1,
        is_preview = False,
        image_url="https://prod-dairyqueen.dotcmscloud.com/dA/1f5781d9c2/banana.png"
    )
    banana_pro_image_1 = Item_Image(
        item_id = 2,
        is_preview = True,
        image_url="https://iam.organic/wp-content/uploads/2022/11/banaan-los.png"
    )
    banana_pro_image_2 = Item_Image(
        item_id=2,
        is_preview = False,
        image_url = "https://th-thumbnailer.cdn-si-edu.com/xK6NAJHiv_51fzn5sDiQt0eD5Is=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/d5/24/d5243019-e0fc-4b3c-8cdb-48e22f38bff2/istock-183380744.jpg"
    )
    banana_bunch_image_1 = Item_Image(
        item_id=3,
        is_preview = True,
        image_url = "https://img.freepik.com/premium-photo/banana-bunch-isolated_88281-1027.jpg"
    )
    banana_bunch_image_2 = Item_Image(
        item_id=3,
        is_preview = False,
        image_url = "https://img.freepik.com/free-vector/vector-ripe-yellow-banana-bunch-isolated-white-background_1284-45456.jpg"
    )
    old_banana_image_1 = Item_Image(
        item_id=4,
        is_preview = True,
        image_url = "https://mario.wiki.gallery/images/1/17/BananaDKCR.png"
    )
    old_banana_image_2 = Item_Image(
        item_id=4,
        is_preview = False,
        image_url = "https://marvel-b1-cdn.bc0a.com/f00000000271648/images.accentuate.io?c_options=w_2160&shop=uponafarm-manufactur.myshopify.com&image=https://cdn.accentuate.io/6538751705170/1615414267261/banana_desktop.png"
    )
    banano_image_1 = Item_Image(
        item_id = 5,
        is_preview = True,
        image_url = 'https://www.dole.com/-/media/project/dole/produce-images/fruit/babies_cut_web.png'
    )
    banano_image_2 = Item_Image(
        item_id = 5,
        is_preview = False,
        image_url = 'https://assets.shop.loblaws.ca/products/20033488001/b2/en/front/20033488001_front_a06_@2.png'
    )
    banana_peel_image_1 = Item_Image(
        item_id = 6,
        is_preview = True,
        image_url = 'https://i.pinimg.com/originals/44/e0/19/44e019cfd2d2803444cb9010b164e98a.png'
    )
    banana_peel_image_2 = Item_Image(
        item_id = 6,
        is_preview = False,
        image_url = 'https://i.pinimg.com/originals/44/e0/19/44e019cfd2d2803444cb9010b164e98a.png'
    )

    db.session.add(banana_image_1)
    db.session.add(banana_image_2)
    db.session.add(banana_pro_image_1)
    db.session.add(banana_pro_image_2)
    db.session.add(banana_bunch_image_1)
    db.session.add(banana_bunch_image_2)
    db.session.add(old_banana_image_1)
    db.session.add(old_banana_image_2)
    db.session.add(banano_image_1)
    db.session.add(banano_image_2)
    db.session.add(banana_peel_image_1)
    db.session.add(banana_peel_image_2)

    db.session.commit()

def undo_items():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.items RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM items")

    db.session.commit()

def undo_item_images():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.item_images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM item_images")

    db.session.commit()
