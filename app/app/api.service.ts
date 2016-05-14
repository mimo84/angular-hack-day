import { Injectable } from 'angular2/core';

@Injectable()
export class WeatherService {
  getWeather() {
    // http://hackdayapi.azurewebsites.net/swagger
    return 'http://hackdayapi.azurewebsites.net/swagger'
  }
}
