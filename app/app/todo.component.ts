import { Component } from 'angular2/core';

@Component({
  selector: 'todo',
  template: `<div style="background-color: {{color}}">Hello</div>`
})
export class ToDoComponent {
  color: string
  constructor() {
    this.color = 'red';
  }
}
