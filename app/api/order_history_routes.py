from flask import Blueprint
from flask_login import login_required, current_user
order_routes = Blueprint('orders', __name__)

@order_routes.route('/current', methods=['GET'])
# @login_required
def current_user_orders():
    # user =

    return current_user.to_dict_order_history()
