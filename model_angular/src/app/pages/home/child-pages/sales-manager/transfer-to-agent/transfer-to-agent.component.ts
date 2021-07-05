import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {TransferAgentService} from '../../../../../services/transfer-agent.service';
import {Product} from '../../../../../models/product.model';
import {Sort} from '@angular/material/sort';
import Swal from 'sweetalert2';
import { BaseRowDef } from '@angular/cdk/table';

@Component({
  selector: 'app-transfer-to-agent',
  templateUrl: './transfer-to-agent.component.html',
  styleUrls: ['./transfer-to-agent.component.scss']
})
export class TransferToAgentComponent implements OnInit {
  agents: any[] = [];
  products: Product[] = [];
  selectedProducts: any[] = [];
  transferForm: FormGroup;
  disabled: any;
  searchTerm: any;
  pageSize = 50;
  currentPageProducts = 1;
  searchTermSelectedProducts: any;
  pageSizeSelectedProducts = 50;
  currentPageSelectedProducts = 1;
  color = 'accent';
  checked = false;
  checkedAvailableAllProducts = false;
  checkedTransferableAllProducts = false;
  public sortedProducts: Product[] = [];
  constructor(public transferAgentService: TransferAgentService) {
    this.products = this.transferAgentService.getProductsInCounter();
    this.agents = this.transferAgentService.getAgentsWithoutCounter();
    this.sortedProducts = this.products.slice();
    this.transferForm = new FormGroup({
      agent_id: new FormControl(null),
      short_name: new FormControl(null)
    });
  }

  ngOnInit(): void {
    this.transferAgentService.getAgentsUpdateListener().subscribe(response => {
      this.agents = response;
      console.log(response);
    });
    this.transferAgentService.getProductsUpdateListener().subscribe(response => {
      this.products = response;
      this.sortedProducts = this.products.slice();
    });
  }

  selectForTransfer() {
    const newArray = this.sortedProducts.filter((el) => el.is_selected);
    this.sortedProducts = this.sortedProducts.filter(ar => !newArray.find(rm => (rm.tag === ar.tag )));
    this.products = this.products.filter(ar => !newArray.find(rm => (rm.tag === ar.tag )));
    this.selectedProducts.push(...newArray);
  }

  // sendProduct(selectedProduct: any) {
  //   const indexSortedProducts = this.sortedProducts.findIndex(x => x.tag === selectedProduct.tag);
  //   const product = this.sortedProducts[indexSortedProducts];
  //   this.selectedProducts.unshift(product);
  //   this.sortedProducts.splice(indexSortedProducts, 1);
  //
  //   const indexProducts = this.products.findIndex(x => x.tag === selectedProduct.tag);
  //   this.products.splice(indexProducts, 1);
  // }

  changeProductSlideToggle() {
    if (this.checkedAvailableAllProducts) {
      this.sortedProducts = this.sortedProducts.map(item => {
        item.is_selected = true;
        return item;
      });
    }else{
      this.sortedProducts = this.sortedProducts.map(item => {
        item.is_selected = false;
        return item;
      });
    }
  }

  changeTransferableProductSlideToggle() {
    this.checkedTransferableAllProducts = !this.checkedTransferableAllProducts;
    if (this.checkedTransferableAllProducts) {
      this.selectedProducts = this.selectedProducts.map(item => {
        item.is_selected = true;
        return item;
      });
    }else{
      this.selectedProducts = this.selectedProducts.map(item => {
        item.is_selected = false;
        return item;
      });
    }
  }

  isAnyAvailableProductSelected() {
    const count = this.sortedProducts.filter(obj => obj.is_selected).length;
    return count > 0;
  }
  countSelectedAvailableProduct(){
    return this.sortedProducts.filter(obj => obj.is_selected).length;
  }

  sortData(sort: Sort) {
    const data = this.products.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedProducts = data;
      return;
    }
    this.sortedProducts = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      const isDesc = sort.direction === 'desc';
      switch (sort.active) {
        case 'tag': return compare(a.tag, b.tag, isAsc);
        case 'model': return compare(a.model_no, b.model_no, isAsc);
        case 'selected': return compare(String(a.is_selected), String(b.is_selected), isDesc);
        case 'size': return compare(a.model_size, b.model_size, isAsc);
        case 'quantity': return compare(a.qty, b.qty, isAsc);
        default: return 0;
      }
    });
  }// end of sortData

  getSelectedAgentName(){
    const agent_id = this.transferForm.get('agent_id').value;
    if (agent_id === null){
      return '';
    }
    const agent = this.agents.find(x => x.agent_id === agent_id);
    return agent.agent_name;
  }

  transferToAgent() {
    const agent_id = this.transferForm.get('agent_id').value;
    const tags = this.selectedProducts.map(t => t.tag.toString());
    this.transferAgentService.transferProduct(agent_id, tags).subscribe((response: {status: any, data: any}) => {
      if (response.status === true){
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger',
            title: 'text-white',
          },
          buttonsStyling: true,
        });


        Swal.fire({
          title: 'Transfer',
          text: 'Are you sure to transfer?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, transfer',
          cancelButtonText: 'No!',
          background: 'rgba(38,39,47,0.95)'
        }).then((result) => {  
          if (result.value) {  
            Swal.fire({  
              timer: 2000,
          
              title: 'Transferred',
              text: 'Product transferred successfully',
              icon: 'success',
              showCancelButton: true,
              confirmButtonColor: '#1661a0',
              cancelButtonColor: '#d33',
              background: 'rgba(38,39,47,0.95)'
            })  
          } else if (result.dismiss === Swal.DismissReason.cancel) {  
            Swal.fire(  
              'Cancelled',  
            )  
          }  
        })  



        // swalWithBootstrapButtons.fire({

          // timerProgressBar: true,
          // timer: 2000,
          
          // title: 'Transferred',
          // text: 'Product transferred successfully',
          // icon: 'success',
          // showCancelButton: false,
          // confirmButtonColor: '#1661a0',
          // cancelButtonColor: '#d33',
          // background: 'rgba(38,39,47,0.95)'

        // });
        this.selectedProducts = [];
      }
    }, (error) => {
      Swal.fire({
        title: error.message,
        text: 'Product is not transferred',
        icon: 'error',
        showConfirmButton: false,
        background: 'rgba(38,39,47,0.95)',
        timer: 3000
      });
    });
  }

  deleteFromSelectedProducts(item){
    const index =  this.selectedProducts.findIndex(x => x.tag === item.tag);
    this.selectedProducts.splice(index, 1);
    item.is_selected = false;
    this.sortedProducts.unshift(item);
    this.products.unshift(item);
  }
}// end of class

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
