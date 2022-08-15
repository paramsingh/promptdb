from venv import create
import promptdb.database as db
from flask import Blueprint, jsonify, Response, request

from promptdb.database.prompt import create_prompt, get_prompt

api_bp = Blueprint('api_v1', __name__)


@api_bp.route('/save-prompt', methods=['POST'])
def save_prompt() -> Response:
    request_data = request.get_json()
    id = create_prompt(
        text=request_data['text'],
        sample_input=request_data['sample_input'],
        sample_output=request_data['sample_output'],
        description=request_data['description'],
        model="gpt-3",
    )
    return jsonify({"id": id})


@api_bp.route('/get-prompt')
def get_prompt_endpoint() -> Response:
    uuid = request.args['id']
    prompt = get_prompt(id=uuid)
    return jsonify(prompt.to_dict())
