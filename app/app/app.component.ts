import {Component} from 'angular2/core';
import { HTTP_PROVIDERS }    from 'angular2/http';


@Component({
    selector: 'my-app',
    template: `<h1>Hello {{yourName}}</h1>
    <hr>
    <!-- This one is not updating the model -->
    <input type="text"  [value]="yourName" placeholder="Enter name" />
    <!-- The one below is updating the model -->
    <input type="text"  [(ngModel)]="yourName" placeholder="Enter name" />

    <!-- <ul>
     <li *ngFor="let name of names">{{name}}</li>
    </ul> -->
    http://hackdayapi.azurewebsites.net/swagger
    `
})
export class AppComponent {
  yourName: string = 'Maurizio'
  names = ['a', 'b', 'c']


}
