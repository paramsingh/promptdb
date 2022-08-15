import sqlite3

connection = None


def init_db() -> sqlite3.Connection:
    global connection
    # TODO: this path needs to be a config option.
    connection = sqlite3.connect("database.db")
    return connection


def create_tables() -> None:
    global connection
    if connection is None:
        return
    cursor = connection.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS prompt (
            id          INTEGER PRIMARY KEY AUTOINCREMENT,
            text        TEXT NOT NULL,
            model       TEXT NOT NULL,
            created     TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    """)
