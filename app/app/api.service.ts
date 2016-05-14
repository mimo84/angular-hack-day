import { Injectable } from 'angular2/core';

@Injectable()
export class WeatherService {
  getWeather() {
    return 'hello from WeatherService'
  }
}
