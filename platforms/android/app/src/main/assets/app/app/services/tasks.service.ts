import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Config } from '../config/config';
import { Task } from '../models/task.model';
require( "nativescript-localstorage" );

@Injectable()
export class TasksService{

    constructor(
        private _http:Http
    ){

    }

    listTasks(){
        return this._http.get(
            Config.apiUrl + "list-tasks",
            { headers : this.getCommonHeaders() }
        ).pipe(
            map(Response => Response.json()),
            catchError(this.handleErrors)
        )
    }

    add(name: string){
        if(!name){
            return throwError("Ingrese correctamente la información de la tarea");
        }

        return this._http.post(
            Config.apiUrl + "save-task",
            JSON.stringify({
                name : name
            }),
            { headers : this.getCommonHeaders() }
        ).pipe(
            map(Response => Response.json()),
            catchError(this.handleErrors)
        );
    }

    delete(id: string){
        if(!id){
            return throwError("Seleccione una tarea valida ");
        }
        return this._http.delete(
            Config.apiUrl + "task" +"/" + id,
            { headers: this.getCommonHeaders() }
        ).pipe(
            map(res => res.json()),
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
        return throwError(error.json());
    }
}