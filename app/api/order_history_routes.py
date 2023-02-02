from flask import Blueprint, request
from ..forms.order_form import OrderForm
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

@order_routes.route('', methods=['POST'])
@login_required
def add_to_order_history():
    form = OrderForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = form.data
        new_order = Order_History(
            user_id = current_user.id,
            item_id = data['item_id'],
            quantity = data['quantity']
        )

        db.session.add(new_order)
        db.session.commit()

        return current_user.to_dict_order_history()
