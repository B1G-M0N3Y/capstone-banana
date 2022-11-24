from flask_wtf import FlaskForm
from wtforms import IntegerField, TextAreaField, BooleanField, StringField
from wtforms.validators import DataRequired, ValidationError


class ReviewForm(FlaskForm):
    body = TextAreaField("Body", validators=[DataRequired()])

class ReviewImageForm(FlaskForm):
    review_id = IntegerField("Review ID", validators=[DataRequired()])
    is_preview = BooleanField("Is Preview", validators=[DataRequired()])
    image_url = StringField("Image URL", validators=[DataRequired()])
