import requests
import datetime as dt

API_KEY = open('api_key', 'r').read().strip()
city = ""

def get_weather(city):
    url = "http://api.openweathermap.org/data/2.5/weather"
    params = {
        'q': city,
        "appid": API_KEY,
        "units": "metric"
    }

    response = requests.get(url, params=params)

    if response.status_code != 200:
        return None
    
    data = response.json()

    return {
        "city": city,
        "temperature_c": round(data['main']['temp'], 2),
        "humidity": data['main']['humidity'],
        "conditions": data['weather'][0]['description'].capitalize(),
        "wind_speed_kmh": round(data['wind']['speed'] * 3.6, 2),
        "precipitation_mm": data.get('rain', {}).get('1h', 0.0),
        "local_time": (
            dt.datetime.fromtimestamp(data['dt'],
            tz = dt.timezone.utc 
        ) + dt.timedelta(seconds=data['timezone'])
    ).strftime("%Y-%m-%d %H:%M")
}
