import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Md5} from 'ts-md5';
import {AuthResponseData, AuthService} from "../../../services/auth.service";
import {Observable} from "rxjs";
import Swal from 'sweetalert2';
import {ActivatedRoute, Router} from '@angular/router';
import {ErrorService} from '../../../services/error.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;
    isLoading = false;



  constructor(private authService: AuthService
              // tslint:disable-next-line:align
              , private router: Router
              // tslint:disable-next-line:align
              , private activatedRoute: ActivatedRoute
              // tslint:disable-next-line:align
              , private errorService: ErrorService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  loginUser(){
        // converting password to MD5
        const md5 = new Md5();
        const passwordMd5 = md5.appendStr(this.loginForm.value.password).end();
        // const formPassword = form.value.password;
        this.isLoading = true;
        this.authService.login({loginId: this.loginForm.value.email, loginPassword: passwordMd5}).subscribe(response => {
            this.isLoading = false;
            if (response.status === true){
                if (this.authService.isOwner()){
                    this.router.navigate(['/owner']).then(r => {});
                }
                if (this.authService.isManagerSales){
                    this.router.navigate(['/SalesManager']).then(r => {});
                }
            }
        }, (error) => {
            console.log(error);
            this.isLoading = false;
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
                title: 'Backend Server Error',
                text: 'Backend Server does not responding',
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#1661a0',
                cancelButtonColor: '#d33',
                background: 'rgba(38,39,47,0.95)'
            });
        });
    }
}
