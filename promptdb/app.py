import promptdb.database as db

from flask import Flask
from promptdb.api import api_bp

app = Flask(__name__)
app.register_blueprint(api_bp, url_prefix='/api/v1')

if __name__ == '__main__':
    db.init_db()
    db.create_tables()
    app.run(debug=True)
