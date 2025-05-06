import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  lat: number;
  lon: number;
}

// TODO: Define a class for the Weather object
interface Weather {
  date: string;
  temperature: number;
  description: string;
  icon: string;
}

// TODO: Complete the WeatherService class
class WeatherService {
city: string;
baseURL: string;
apiKey: string;


  // TODO: Define the baseURL, API key, and city name properties
  constructor() {
    this.city = '';
    this.baseURL = process.env.WEATHER_API_BASE_URL || '';
    this.apiKey = process.env.WEATHER_API_KEY || '';
  }

//TODO:fetch latitude and the longitude the user searched for first
async Coordinates(city: string){
  const url = `${this.baseURL}/geo/1.0/direct?q=${city}&limit=1&appid=${this.apiKey}`;
}

//http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

//TODO:fetch the weather from the longitude and the latitude from the previious TODO
async Weather(coordinates: Coordinates){
  const url = `${this.baseURL}/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${this.apiKey}`;
}

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

//TODO: once we get the weather we need to format it and send it back to the client
async formatWeather(data: any): Promise<Weather[]> {
  const weatherList: Weather[] = data.list.map((item: any) => ({
    date: item.dt_txt,
    temperature: item.main.temp,
    description: item.weather[0].description,
    icon: item.weather[0].icon,
  }));
  return weatherList;
  
}
}

export default new WeatherService();
