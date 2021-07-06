import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss']
})
export class BankingComponent implements OnInit {
  bankingForm: FormGroup;
  bankDetails: any;
  constructor(private http: HttpClient) {
    this.bankingForm = new FormGroup({
      ifsc: new FormControl(null)
    });
  }
  ngOnInit(): void {
  }

  getBankDetails() {
    this.http.get<any>('https://ifsc.razorpay.com/' + this.bankingForm.get('ifsc').value).subscribe( response => {
      this.bankDetails = response;
    }, (error => {
      console.log('error getting record');
    }));
  }
}
