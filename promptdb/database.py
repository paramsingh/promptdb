import sqlite3


def init_db() -> sqlite3.Connection:
    # TODO: this path needs to be a config option.
    return sqlite3.connect("database.db")
