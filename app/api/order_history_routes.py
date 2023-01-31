from flask import Blueprint
from app.models.order_history import db, Order_History
from flask_login import login_required, current_user
order_routes = Blueprint('orders', __name__)

@order_routes.route('/current', methods=['GET'])
@login_required
def current_user_orders():
    return current_user.to_dict_order_history()


@order_routes.route('/<int:order_id>', methods=['DELETE'])
@login_required
def delete_from_order_history(order_id):
    order = Order_History.query.get(order_id)

    if not order:
        return {'errors': 'Order does not exist.'}, 404

    if not (order.user_id == current_user.id):
        return {'errors': 'You do not have permission to delete this order'}, 403

    db.session.delete(order)
    db.session.commit()
    return {"message": ["Order deleted."]}, 200
