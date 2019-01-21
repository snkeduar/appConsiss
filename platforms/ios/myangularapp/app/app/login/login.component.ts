import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";

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
    }

    login() {
        this.userService.login(this.user)
        .subscribe(status=>{
            if(status){
                localStorage.setItem('token', status.token);
                this.router.navigate(['/items']);
            }
        }, err =>{
            alert("Ocurrio el siguiente error:" + err);
        })
    }

    logout() {        
        localStorage.removeItem('token');
        localStorage.removeItem('usuarioDatos');
        this.router.navigate(['/login']);		
	}

}
