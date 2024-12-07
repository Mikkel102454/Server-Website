from flask import Flask, send_file, jsonify, request, send_from_directory

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



from backend.account.account import CreateAccount
@app.route('/exchange', methods=['POST'])
def HandleExcahnge():
    data = request.json
    if data.get('handleCode') is None:
        return jsonify({"status": "failure", "exitCode": 400})
    
    match data.get('handleCode'):
        case '101':
            CreateAccount(data.get('username'), data.get('email'), data.get('password'))


    return jsonify({"status": "failure", "exitCode": 500})
if __name__ == '__main__':
    app.run(debug=True)
