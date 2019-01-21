import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Config } from '../config/config';
import { User } from '../models/user.model';


@Injectable()
export class UserService{
    URL_SERVICIO = Config.apiUrl;

    constructor(
        private _http:Http
    ){}

    register(user: User) {
        if (!user.email || !user.name ||!user.password) {
            return throwError("Ingrese todos los datos.");
        }

        return this._http.post(
            Config.apiUrl + "register/",
            JSON.stringify({
                username: user.email,
                email: user.email,
                password: user.password
            }),
            { headers: this.getCommonHeaders() }
        ).pipe(
            map(Response => Response.json()),
            catchError(this.handleErrors)
        );
    }

    login(user: User){
        return this._http.post(
            Config.apiUrl + "list-tasks",
            JSON.stringify({
                name: user.name,
                email: user.email,
                password: user.password
            }),
            { headers : this.getCommonHeaders()}
        ).pipe(
            map(Response => Response.json()),
            catchError(this.handleErrors)
        )
    }

    getCommonHeaders() {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", localStorage.getItem('token'));
        return headers;
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}