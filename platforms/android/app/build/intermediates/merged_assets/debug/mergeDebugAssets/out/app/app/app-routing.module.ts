// import { NgModule } from "@angular/core";
// import { NativeScriptRouterModule } from "nativescript-angular/router";
// import { Routes } from "@angular/router";

// import { ItemsComponent } from "./item/items.component";
// import { ItemDetailComponent } from "./item/item-detail.component";

// const routes: Routes = [
    //     { path: "", redirectTo: "/items", pathMatch: "full" },
    //     { path: "items", component: ItemsComponent },
    //     { path: "item/:id", component: ItemDetailComponent },
    // ];
    
    // @NgModule({
        //     imports: [NativeScriptRouterModule.forRoot(routes)],
        //     exports: [NativeScriptRouterModule]
        // })
        // export class AppRoutingModule { }
        
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from "./register/register.component";
import { ListComponent } from "./list/list.component";

export const routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "list-tasks", component: ListComponent}
];

export const navigatableComponents = [
    LoginComponent,
    RegisterComponent,
    ListComponent
];