import { Component } from 'angular2/core';

@Component({
  selector: 'remaining',
  template: `<div>Remaining: {{ remaining }} of {{ all }}</div>`
})
export class ColorsComponent {
  color: string
  constructor() {
    this.color = 'red';
  }
}
