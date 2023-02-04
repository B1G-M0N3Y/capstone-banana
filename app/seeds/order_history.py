from ..models.order_history import Order_History, db
from ..models import User, environment

def seed_order_history():
    order_1 = Order_History(
        user_id = 1,
        item_id = 1,
        quantity = 1
    )
    order_2 = Order_History(
        user_id = 1,
        item_id = 2,
        quantity = 1
    )

    db.session.add(order_1)
    db.session.add(order_2)

    db.session.commit()

def undo_order_history():
    db.session.execute("DELETE FROM order_history")
    db.session.commit()
