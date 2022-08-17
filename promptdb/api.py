import typing

from flask_cors import cross_origin  # type: ignore
import promptdb.database as db
from flask import Blueprint, jsonify, Response, request

from promptdb.database.prompt import create_prompt, get_prompt

api_bp = Blueprint('api_v1', __name__)


@api_bp.route('/prompt/save', methods=['POST'])
@cross_origin()
def save_prompt() -> Response:
    request_data = typing.cast(typing.Dict[str, str], request.get_json())
    id = create_prompt(
        text=request_data['text'],
        sample_input=typing.cast(
            typing.Optional[str], request_data['sampleInput']),
        sample_output=typing.cast(
            typing.Optional[str], request_data['sampleOutput']),
        description=typing.cast(
            typing.Optional[str], request_data['description']),
        model="gpt-3",
    )
    return jsonify({"id": id})


@api_bp.route('/prompt/get')
@cross_origin()
def get_prompt_endpoint() -> Response:
    uuid = request.args['id']
    prompt = get_prompt(id=uuid)
    return jsonify(prompt.to_dict())
