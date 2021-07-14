import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/product.model';


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
  getUsers(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/test_model.json');
      // return of(this.models).pipe(delay(5000));
  }
}
