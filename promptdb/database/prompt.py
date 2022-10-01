import datetime
from typing import Dict, Optional, Union, List
import uuid
from dataclasses import dataclass

import promptdb.database as db


@dataclass
class Prompt:
    id: int
    uuid: str
    text: str
    sample_input: Optional[str]
    sample_output: Optional[str]
    description: Optional[str]
    model: str
    created: datetime.datetime

    def to_dict(self) -> Dict[str, Union[Optional[str], int]]:
        return {
            "id": self.id,
            "uuid": self.uuid,
            "text": self.text,
            "sample_input": self.sample_input,
            "sample_output": self.sample_output,
            "description": self.description,
            "model": self.model,
            "created": self.created,
        }


def create_prompt(
    text: str,
    model: str,
    sample_input: Optional[str],
    sample_output: Optional[str],
    description: Optional[str],
) -> str:
    id = str(uuid.uuid4())
    connection = db.init_db()
    cursor = connection.cursor()
    cursor.execute("""
        INSERT INTO prompt (uuid, text, model, sample_input, sample_output, description)
        VALUES (?, ?, ?, ?, ?, ?)
    """, (id, text, model, sample_input, sample_output, description))
    connection.commit()
    connection.close()
    return id


def get_prompt(id: str) -> Prompt:
    connection = db.init_db()
    cursor = connection.cursor()

    val = cursor.execute("""
        SELECT id
             , uuid
             , text
             , model
             , created
             , sample_input
             , sample_output
             , description
          FROM prompt
         WHERE uuid = ?
    """, (id,))
    p = val.fetchone()
    return _row_to_prompt(p)

def _row_to_prompt(row) -> Optional[Prompt]:
    if not row:
        return None
    return Prompt(
        id=row[0],
        uuid=row[1],
        text=row[2],
        model=row[3],
        created=row[4],
        sample_input=row[5],
        sample_output=row[6],
        description=row[7],
    )

def list_prompts(offset: int = 0) -> List[Prompt]:
    connection = db.init_db()
    cursor = connection.cursor()

    rows = cursor.execute("""
        SELECT id
             , uuid
             , text
             , model
             , created
             , sample_input
             , sample_output
             , description
          FROM prompt
      ORDER BY created
         LIMIT 100
        OFFSET ?
    """, (offset,))

    return [_row_to_prompt(row) for row in rows.fetchall() if row is not None]
