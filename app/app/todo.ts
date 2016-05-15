import { Observable } from 'rxjs';

export interface Todo {
  city: string,
  weather: Observable<any>,
  done: boolean
}
