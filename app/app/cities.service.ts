import { Injectable } from 'angular2/core';

@Injectable()
export class CitiesService {
  availableCities: string[] = ['Winterfell','San Francisco','Los Angeles','Washington, D.C.','Chicago','Sydney','Brisbane','Melbourne','Leuven','Stockholm','Dresden','Dublin','Singapore','Quebec City','Madrid','Sicily','Edinburgh','Amsterdam','Cape Town','Shanghai','Tokyo','Jerusalem','London','Rome','Paris','New York']

  constructor() {

  }

  addCity(city) {
    this.availableCities.push(city)
  }

  removeCity(idx) {
    this.availableCities.splice(idx, 1)
  }

  getCities() {
    return this.availableCities;
  }

}
