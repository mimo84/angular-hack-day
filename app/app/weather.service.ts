import { Injectable } from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import { Observable} from 'rxjs/Rx'

var a = Observable;

@Injectable()
export class WeatherService {
  weather: string
  constructor(private http: Http) {

  }
  getWeather(city: string) {
    return this.http.get('http://hackdayapi.azurewebsites.net/api/weather/city/' + city)
      .map(k => k.json());
  }
}
