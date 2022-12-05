from flask.cli import AppGroup
from .users import seed_users, undo_users
from .items import seed_items, seed_item_images, undo_items, undo_item_images
from .reviews import seed_reviews, seed_review_images, undo_review_images, undo_reviews

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_items()
    seed_item_images()
    seed_reviews()
    seed_review_images()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_item_images()
    undo_items()
    undo_review_images()
    undo_reviews()
    # Add other undo functions here
