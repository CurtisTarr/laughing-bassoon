from flask import Flask, abort, jsonify, request, Response
from flask_cors import CORS
from server.post_cache import PostCache
from server.post_store import add_post
from server.post import Post

app = Flask(__name__)
CORS(app)
cache = PostCache()


@app.route("/posts", methods=['GET'])
def posts():
    try:
        cache.update()
        return jsonify(posts=cache.to_json()), '200'
    except:
        abort(500)


@app.route("/posts", methods=['POST'])
def post():
    if not request.json:
        abort(400)

    try:
        data = request.json
        new_post = Post(data['user'], data['timestamp'], data['message'])
        add_post(new_post)
    except KeyError:
        abort(400)
    except:
        abort(500)

    cache.outdated_cache = True
    return Response({'success': True}, status=201, mimetype='application/json')


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)
