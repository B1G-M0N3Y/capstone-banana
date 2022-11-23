from flask_wtf import FlaskForm
from wtforms import IntegerField, TextAreaField, BooleanField, StringField
from wtforms.validators import DataRequired, ValidationError

def message_exists(form):
    body = form.data['body']

    if not body:
        raise ValidationError('Review body must be provided')

class ReviewForm(FlaskForm):
    body = TextAreaField("Body", validators=[DataRequired(), message_exists])
    item_id = IntegerField("Item ID", validators=[DataRequired()])
    user_id = IntegerField("Used ID", validators=[DataRequired()])

class ReviewImageForm(FlaskForm):
    review_id = IntegerField("Review ID", validators=[DataRequired()])
    is_preview = BooleanField("Is Preview", validators=[DataRequired()])
    image_url = StringField("Image URL", validators=[DataRequired()])
