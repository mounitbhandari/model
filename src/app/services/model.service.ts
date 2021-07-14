import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class ModelService {
  private models: any;

  constructor(private http: HttpClient) {
    this.http.get('assets/test_model.json').subscribe((data: any) => {
      this.models = data;
    });
  }
  getUsers(): Observable<{CompanyName: string}[]> {
    this.http.get('assets/test_model.json').subscribe((data: any) => {
      this.models = data;
    });
    // Simulating an API
    return of([
      {CompanyName: 'Angular'},
      {CompanyName: 'React'},
      {CompanyName: 'Vue'},
      {CompanyName: 'Backbone'},
      {CompanyName: 'Knockout'},
    ]).pipe(delay(5000));
    // .pipe(delay(5000)

  }
}
