from flask import Flask, send_file, jsonify, request, send_from_directory, make_response

app = Flask(__name__)

# Route to serve the HTML file
@app.route('/')
def GetIndexHTML():
    return send_from_directory("html-files", "landing-page.html")
# Route to serve all HTML files
@app.route('/html-files/<path:filename>')
def GetHTMLFiles(filename):
    return send_from_directory("html-files", filename)

# Route to serve all CSS files
@app.route('/css-files/<path:filename>')
def GetCSSFiles(filename):
    return send_from_directory("css-files", filename)

# Route to serve all JS files
@app.route('/js-files/<path:filename>')
def GetJSFiles(filename):
    return send_from_directory("js-files", filename)

# Route to serve all IMG files
@app.route('/img/<path:filename>')
def GetIMGFiles(filename):
    return send_from_directory("img", filename)

from backend.token import VerifyToken, RefreshToken
print("Importing")
from backend.account.account import CreateAccount, AccessAccount
@app.route('/exchange', methods=['POST'])
def HandleExcahnge():
    data = request.json
    if data.get('handleCode') is None:
        return jsonify({"status": "failure", "exitCode": 400})
    
    
    # Dosnt require login token
    try:
        match data.get('handleCode'):
            case 101: # Create new account
                return jsonify(CreateAccount(data.get('username'), data.get('email'), data.get('password')))
            case 102: # Login to account
                return jsonify(AccessAccount(data.get('username'), data.get('password')))
    except Exception as e:
        print(e)
        return jsonify({"status": "failure", "exitCode": 500})

    # Require token
    try:
        if(data.get('token')):
            token = data.get('token')
            generatedNewToken = 0
            if(VerifyToken(token) == 1):
                #refresh token
                newToken = RefreshToken(token)
                if(newToken == None):
                    return jsonify({"status": "failure", "exitCode": 512})
                token = newToken
                generatedNewToken = 1


            if(VerifyToken(token) == 0):
                _#match data.get('handleCode'):
                if(generatedNewToken == 1):
                    return jsonify({**response, "newToken": token})
                return jsonify(response)
            else:
                return jsonify({"status": "failure", "exitCode": 401})
    except Exception as e:
        print(e)
        return jsonify({"status": "failure", "exitCode": 500})
if __name__ == '__main__':
    app.run(debug=True)
