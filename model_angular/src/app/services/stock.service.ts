import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup} from '@angular/forms';
import {environment} from '../../environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {ErrorService} from './error.service';
import {Subject, throwError} from 'rxjs';
import {Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  stockForm: FormGroup;
  productData: Product[] = [];
  productsSub = new Subject<any[]>();
  private BASE_API_URL = environment.BASE_API_URL;
  constructor(private  http: HttpClient , private  errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getModelNumbers').subscribe((response: {status: any , data: Product[]}) => {
      this.productData =  response.data;
      this.productsSub.next([...this.productData]);
    });
    this.stockForm = new FormGroup({
      tag:  new FormControl(null),
      model_no:  new FormControl(null),
      model_size:  new FormControl(null),
      quantity:  new FormControl(null),
      gold:  new FormControl(null),
      labour_charge:  new FormControl(null),
      gross_weight:  new FormControl(null),
      package_weight:  new FormControl(null),
      in_stock:  new FormControl(1),
      agent_id:  new FormControl('AG2018'),
      employee_id:  new FormControl(46),
      reference:  new FormControl(null),
      bill_no:  new FormControl(null),
      job_id:  new FormControl(null),
    });
  }
  getProductsUpdateListener(){
    return this.productsSub.asObservable();
  }
  saveStock(){
    return this.http.post(this.BASE_API_URL + '/stocks', this.stockForm.value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
        }));
  }
  getPriceByModelNumber(){
    return this.http.get(this.BASE_API_URL + '/getPriceByModelNumber/' + this.stockForm.value.model_no);
  }
  private serverError(err: any) {
    if (err instanceof Response) {
      return throwError('backend server error ');
      // if you're using lite-server, use the following line
      // instead of the line above:
      // return Observable.throw(err.text() || 'backend server error');
    }
    if (err.status === 0){
      // tslint:disable-next-line:label-position
      return throwError ({status: err.status, message: 'Backend Server is not Working', statusText: err.statusText});
    }
    if (err.status === 401){
      // tslint:disable-next-line:label-position
      return throwError ({status: err.status, message: 'Your are not authorised', statusText: err.statusText});
    }
    return throwError(err);
  }
}
