from flask import Flask, request, Response
from flask_cors import CORS

# Init app
app = Flask(__name__)

# Open cors
CORS(app)

@app.after_request
def middleware_for_response(response):
    response.headers.add('Access-Control-Allow-Credentials', 'true')
    return response

@app.route('/set-cookie', methods=['GET'])
def set_cookie():

    response = Response('You have set a cookie')
    response.set_cookie('id_token', 'somereallycoolvalue', httponly=True)

    return response


@app.route('/get-cookie', methods=['GET'])
def get_cookie():

    cookie = request.cookies.get('id_token')
    
    if cookie is None:
        res = 'Cookie not set'
    else:
        res = f'Cookie: {cookie}'

    return res


@app.route('/remove-cookie', methods=['GET'])
def remove_cookie():

    if request.cookies.get('id_token'):
        res = Response('id_token has been unset')
        res.delete_cookie('id_token')
    else:
        res = 'id_token was not a cookie'

    return res

app.run(debug=True)