import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

// import { AppRoutingModule } from "./app-routing.module";
import { routes, navigatableComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegisterComponent } from './register/register.component';
// import { ItemsComponent } from "./item/items.component";
// import { ItemDetailComponent } from "./item/item-detail.component";
// import { ListComponent } from './list/list.component';
// import { LoginComponent } from './login/login.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptUIListViewModule,
        // AppRoutingModule
        NativeScriptRouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        // ItemsComponent,
        // ItemDetailComponent,
        // ListComponent,
        // LoginComponent,
        ...navigatableComponents,
        RegisterComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
