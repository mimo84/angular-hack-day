import { Component } from 'angular2/core';
import { WeatherService } from './api.service';
import { Observable} from 'rxjs'


@Component({
    selector: 'my-app',
    template: `<h1>Hello {{testValue$ | async | json}}</h1>
    <hr>
    <!-- This one is not updating the model -->
    <input type="text"  [value]="yourName" placeholder="Enter name" />
    <!-- The one below is updating the model -->
    <input type="text"  [(ngModel)]="yourName" placeholder="Enter name" />
    `,
    providers: [
      WeatherService
    ]
})
export class AppComponent {
  testValue$: Observable<any>;
  constructor(private weatherService: WeatherService ) {
    this.testValue$ = this.weatherService.getWeather();
  }


  yourName: string = 'Maurizio'



}
