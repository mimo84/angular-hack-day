import { Component } from 'angular2/core';
import { WeatherService } from './weather.service';
import {ToDoComponent} from './todo.component';
import { Todo } from './todo';
import { Observable} from 'rxjs'


@Component({
    selector: 'my-app',
    template: `
    <h1>Weather App</h1>

    <input type="text" [(ngModel)]="newCity"/>
    <button (click)="getWeather(newCity)">Add City</button>
    <ul><li *ngFor="#w$ of currentWeathers"><input type="checkbox"/> Hello {{ w$ | async | json}}<li></ul>
    `,
    providers: [
      WeatherService
    ],
    directives: [
      ToDoComponent
    ]
})
export class AppComponent {
  currentWeathers: Observable<any>[] = [];
  city: string = 'Brisbane';
  newCity: string;

  weathers: Todo[] = [
    {
      city: 'Brisbane',
      done: false
    },
    {
      city: 'Melbourne',
      done: false
    }
  ];

  constructor(private weatherService: WeatherService ) {
    this.getWeather(this.city)
  }

  addCity() {
    this.weathers.push({
      city: this.city,
      done: false
    })
  }
  getWeather(city) {

    this.currentWeathers.push(this.weatherService.getWeather(city))
  }





}
