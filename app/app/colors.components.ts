import { Component } from 'angular2/core';

@Component({
  selector: 'colors-component',
  template: `MAurizio`
})
export class ColorsComponent {
  color: string
  constructor() {
    this.color = 'red';
  }
}
