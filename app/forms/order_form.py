from flask_wtf import FlaskForm
from wtforms import IntegerField, TextAreaField, BooleanField, StringField
from wtforms.validators import DataRequired, ValidationError

class OrderForm(FlaskForm):
    item_id = IntegerField("Item Id", validators=[DataRequired()])
    quantity = IntegerField("Quantity", validators=[DataRequired()])
