import sqlite3


def init_db() -> sqlite3.Connection:
    # TODO: this path needs to be a config option.
    connection = sqlite3.connect("database.db")
    return connection


def create_tables() -> None:
    connection = init_db()
    cursor = connection.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS prompt (
            id          INTEGER PRIMARY KEY AUTOINCREMENT,
            uuid        TEXT NOT NULL,
            text        TEXT NOT NULL,
            model       TEXT NOT NULL,
            created     TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    """)

    cursor.execute("""
        CREATE UNIQUE INDEX iF NOT EXISTS prompt_uuid_ndx ON prompt(uuid);
    """)
    connection.commit()
    connection.close()
