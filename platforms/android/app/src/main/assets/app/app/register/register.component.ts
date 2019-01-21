import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Page } from 'tns-core-modules/ui/page';

@Component({
    selector: 'ns-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    providers: [UserService],
    moduleId: module.id,
})
export class RegisterComponent implements OnInit {
    user: User;

    constructor(
        private router: Router,
        private userService: UserService,
        private page: Page
    ) {
        this.user = new User();
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
    }

    registro(){
        this.userService.register(this.user)
        .subscribe(() => {
            alert("Su cuenta se creo satisfactoriamente");
            this.user.name = undefined;
            this.user.email = undefined;
            this.user.password = undefined;
        }, err =>{
            alert("Ocurrio el siguiente error:" + JSON.stringify(err.message));
        });
    }
}
