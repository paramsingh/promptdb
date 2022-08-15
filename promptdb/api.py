from flask import Blueprint, jsonify, Response

api_bp = Blueprint('api_v1', __name__)


@api_bp.route('/save-prompt')
def save_prompt() -> Response:
    return jsonify({"success": "true"})
