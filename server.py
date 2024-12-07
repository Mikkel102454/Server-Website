from flask import Flask, send_file, jsonify, request, send_from_directory

app = Flask(__name__)

# Route to serve the HTML file
@app.route('/')
def GetIndexHTML():
    return send_from_directory("html-files", "landing-page.html")

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














@app.route('/submit', methods=['POST'])
def receive_data():
    data = request.json
    print(f"Received from frontend: {data}")
    return jsonify({"status": "success", "received": data})


if __name__ == '__main__':
    app.run(debug=True)
