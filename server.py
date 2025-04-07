import json
from flask import Flask, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data/asteroids')
def get_asteroids_data():
    # Fetch and process asteroids data (example data here)
    asteroids_data = [
        {"name": "Asteroid 1", "coordinates": [50.0, 10.0]},
        {"name": "Asteroid 2", "coordinates": [60.0, 20.0]}
    ]
    return jsonify(asteroids_data)

@app.route('/data/satellites')
def get_satellites_data():
    # Fetch and process satellites data (example data here)
    satellites_data = [
        {"name": "Satellite 1", "coordinates": [30.0, -10.0]},
        {"name": "Satellite 2", "coordinates": [40.0, -20.0]}
    ]
    return jsonify(satellites_data)

if __name__ == '__main__':
    app.run(debug=True)