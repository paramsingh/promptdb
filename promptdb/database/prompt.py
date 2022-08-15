import datetime
import uuid
from dataclasses import dataclass

import promptdb.database as db


@dataclass
class Prompt:
    id: int
    uuid: str
    text: str
    model: str
    created: datetime.datetime


def create_prompt(
    text: str,
    model: str,
) -> str:
    id = str(uuid.uuid4())
    connection = db.init_db()
    cursor = connection.cursor()
    cursor.execute("""
        INSERT INTO prompt (uuid, text, model)
        VALUES (?, ?, ?)
    """, (id, text, model))
    connection.commit()
    connection.close()
    return id


def get_prompt(id: str) -> Prompt:
    connection = db.init_db()
    cursor = connection.cursor()

    val = cursor.execute("""
        SELECT id, uuid, text, model, created
          FROM prompt
         WHERE uuid = ?
    """, (id,))
    p = val.fetchone()
    return Prompt(
        id=p[0],
        uuid=p[1],
        text=p[2],
        model=p[3],
        created=p[4],
    )
