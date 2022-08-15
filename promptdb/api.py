from flask import Blueprint, jsonify

api_bp = Blueprint('api_v1', __name__)


@api_bp.route('/save-prompt')
def save_prompt():
    return jsonify({"success": "true"})
