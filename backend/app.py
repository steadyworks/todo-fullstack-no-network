from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

_todos = []


@app.route('/api/todos', methods=['GET'])
def get_todos():
    # TODO: return _todos as JSON
    return jsonify([])


@app.route('/api/todos', methods=['POST'])
def create_todo():
    # TODO: create and return a new todo with id, text, completed=False
    return jsonify({'error': 'not implemented'}), 501


@app.route('/api/todos/<todo_id>', methods=['PATCH'])
def update_todo(todo_id):
    # TODO: update completed field of matching todo
    return jsonify({'error': 'not implemented'}), 501


@app.route('/api/todos/<todo_id>', methods=['DELETE'])
def delete_todo(todo_id):
    # TODO: remove matching todo
    return '', 501


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=False)
