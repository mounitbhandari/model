import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showFiller = false;
  showLogin = false;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true
    });
    swalWithBootstrapButtons.fire({
      // timer: 3000,
      // timerProgressBar: true,
      title: 'Confirmation',
      text: 'Do you sure to save this result?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#1661a0',
      cancelButtonColor: '#d33',
      background: 'rgba(38,39,47,0.95)',
      confirmButtonText: 'Yes!'
    }).then((result) => {
        if (result.isConfirmed){
          this.authService.logout();
        }else{

        }
    });
  }
  logoutAll() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true
    });
    swalWithBootstrapButtons.fire({
      // timer: 3000,
      // timerProgressBar: true,
      title: 'Confirmation',
      text: 'Do you sure to save this result?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#1661a0',
      cancelButtonColor: '#d33',
      background: 'rgba(38,39,47,0.95)',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.isConfirmed){
        this.authService.logoutAll();
      }else{

      }
    });
  }
}
