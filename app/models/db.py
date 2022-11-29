from flask_sqlalchemy import SQLAlchemy
import os

db = SQLAlchemy()
environment = os.getenv("FLASK_ENV")

# helper function for adding prefix to foreign key column references in production
def add_prefix_for_prod(attr):
    if environment == "production":
        return f"{SCHEMA}.{attr}"
    else:
        return attr
