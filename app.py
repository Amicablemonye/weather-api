from flask import Flask, jsonify, render_template, request
from weather import get_weather

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route("/weather")
def weather():
    city = request.args.get("city")

    if not city:
        return jsonify({"error":"City is required"}), 400
    
    weather_data = get_weather(city)

    if weather_data is None:
        return jsonify({"error":"City not found"}), 500
    
    return jsonify(weather_data)

if __name__ == "__main__":
    app.run(debug=True)
