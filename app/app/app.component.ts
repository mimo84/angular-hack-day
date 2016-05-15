import { Component } from 'angular2/core';
import { WeatherService } from './weather.service';
import { Todo } from './todo';



@Component({
    selector: 'my-app',
    template: `
    <h1>Weather App</h1>

    <input type="text" [(ngModel)]="newCity"/>
    <button (click)="getWeather(newCity)">Add City</button>
    <div>Remaining: {{ remaining }} of {{ all }}</div>
    <button (click)="addTodo()">A Button</button>
    <ul>
      <li *ngFor="#w of currentWeathers; #idx = index ">
        <input type="checkbox" checked={{w.done}} [(ngModel)]="w.done"/> Weather in {{ w.city }} is {{ w.weather | async | json }}
        <button (click)="removeCity(idx)">Remove city</button>
      </li>
    </ul>
    `,
    providers: [
      WeatherService
    ],
    directives: [
      // ToDoComponent
    ]
})
export class AppComponent {

  task: string = '';


  newCity: string;
  availableCities: string[] = ['Winterfell','San Francisco','Los Angeles','Washington, D.C.','Chicago','Sydney','Brisbane','Melbourne','Leuven','Stockholm','Dresden','Dublin','Singapore','Quebec City','Madrid','Sicily','Edinburgh','Amsterdam','Cape Town','Shanghai','Tokyo','Jerusalem','London','Rome','Paris','New York']

  currentWeathers: Todo[] = [];

  constructor(private weatherService: WeatherService ) {
    this.availableCities.forEach(c => this.getWeather(c))
  }

  removeCity(idx) {
    this.currentWeathers.splice(idx, 1);
  }

  get remaining() {
    return this.currentWeathers.reduce((count: number, todo: Todo) => count + + !todo.done, 0)
  }

  get all() {
    return this.currentWeathers.reduce((count: number, todo: Todo) => count + 1, 0)
  }

  getWeather(city) {
    this.currentWeathers.push(
      {
        city: city,
        weather: this.weatherService.getWeather(city),
        done: false
      });
  }

}
