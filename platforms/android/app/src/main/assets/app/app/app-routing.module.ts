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