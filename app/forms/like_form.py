from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired


class LikeForm(FlaskForm):
    review_id = IntegerField('review', validators=[DataRequired()])
