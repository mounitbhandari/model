import { Component, OnInit } from '@angular/core';
import {StockService} from '../../../../../services/stock.service';
import {FormGroup} from '@angular/forms';
import Swal from "sweetalert2";
import {Stock} from '../../../../../models/stock.model';
import {Product} from '../../../../../models/product.model';


@Component({
  selector: 'app-stock-entry',
  templateUrl: './stock-entry.component.html',
  styleUrls: ['./stock-entry.component.scss']
})
export class StockEntryComponent implements OnInit {
  stockForm: FormGroup;
  productList: Product[] = [];
  labourCharge: any;
  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.stockForm = this.stockService.stockForm;
    this.stockService.getProductsUpdateListener().subscribe((response) =>{
      this.productList = response;
    });
  }
  getLabourCharge(){
    this.stockService.getPriceByModelNumber().subscribe((response: {status: any , data: any}) => {
      if (response.status === true){
        this.labourCharge =  response.data.price;
        this.stockForm.patchValue({labour_charge: this.labourCharge});
      }
    });
  }
  onSubmit(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
        title: 'text-white',
      },
      buttonsStyling: true,
    });
    Swal.fire({
      title: 'Stock Entry',
      text: 'Are you sure to add stock?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, add',
      cancelButtonText: 'No!',
      background: 'rgba(38,39,47,0.95)'
    }).then((result) => {
      if (result.value){
        this.stockService.saveStock().subscribe((response: {status: any , data: Stock}) => {
          Swal.fire({
            timer: 2000,
            title: 'Saved',
            text: 'Stock added successfully',
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#1661a0',
            cancelButtonColor: '#d33',
            background: 'rgba(38,39,47,0.95)'
          });
          if (response.status === true){
            this.stockForm.reset();
            this.stockForm.patchValue({in_stock: 1 , agent_id: 'AG2018'});
          }
        }, error => {
          Swal.fire({
            title: error.message,
            text: 'Stock is not added',
            icon: 'error',
            showConfirmButton: false,
            background: 'rgba(38,39,47,0.95)',
            timer: 3000
          });
        });
      }
      else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
            'Cancelled',
        );
      }
    });
  }
}
