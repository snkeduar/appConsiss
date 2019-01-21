import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";
require( "nativescript-localstorage" );

@Component({
    selector: 'ns-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [UserService],
    moduleId: module.id,
})
export class LoginComponent implements OnInit {
    user: User;
    isLoggingIn = true;

    constructor(
        private router: Router,
        private page: Page,
        private userService: UserService,
    ) {
        this.user = new User();
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.user.name  = undefined;
        this.user.email = undefined;
        this.user.password = undefined;
    }

    login() {
        this.userService.login(this.user)
        .subscribe(status=>{
            if(status){
                console.log(status);
                localStorage.setItem('token', status.token);
                this.router.navigate(['/list-tasks']);
            }
        }, err =>{
            alert("Ocurrio el siguiente error:" + JSON.stringify(err.message));
        })
    }

    logout() {        
        localStorage.removeItem('token');
        localStorage.removeItem('usuarioDatos');
        this.router.navigate(['/login']);		
	}
    register(){
        this.router.navigate(['/register']);
    }
}
