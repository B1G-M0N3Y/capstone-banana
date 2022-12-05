from ..models import db, User, environment


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demo',
        last_name='User',
        email='demo@aa.io',
        password='password')
    marnie = User(
        first_name='marnie',
        last_name='barnie',
        email='marnie@aa.io',
        password='password')
    bobbie = User(
        first_name='bobbie',
        last_name='fingers',
        email='bobbie@aa.io',
        password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute("DELETE FROM users")
    db.session.commit()
