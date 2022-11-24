from flask_wtf import FlaskForm
from wtforms import IntegerField, TextAreaField, BooleanField, StringField
from wtforms.validators import DataRequired, ValidationError


class ReviewForm(FlaskForm):
    body = TextAreaField("Body", validators=[DataRequired()])

class ReviewImageForm(FlaskForm):
    is_preview = BooleanField("Is Preview", validators=[DataRequired()])
    image_url = StringField("Image URL", validators=[DataRequired()])
