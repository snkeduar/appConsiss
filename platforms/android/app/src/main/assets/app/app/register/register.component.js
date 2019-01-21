"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_model_1 = require("../models/user.model");
var user_service_1 = require("../services/user.service");
var router_1 = require("@angular/router");
var page_1 = require("tns-core-modules/ui/page");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, userService, page) {
        this.router = router;
        this.userService = userService;
        this.page = page;
        this.user = new user_model_1.User();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    RegisterComponent.prototype.registro = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            alert("Su cuenta se creo satisfactoriamente");
            _this.user.name = undefined;
            _this.user.email = undefined;
            _this.user.password = undefined;
        }, function (err) {
            alert("Ocurrio el siguiente error:" + JSON.stringify(err.message));
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'ns-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css'],
            providers: [user_service_1.UserService],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.Router,
            user_service_1.UserService,
            page_1.Page])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELG1EQUE0QztBQUM1Qyx5REFBdUQ7QUFDdkQsMENBQXlDO0FBQ3pDLGlEQUFnRDtBQVNoRDtJQUdJLDJCQUNZLE1BQWMsRUFDZCxXQUF3QixFQUN4QixJQUFVO1FBRlYsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFNBQUksR0FBSixJQUFJLENBQU07UUFFbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNuQyxTQUFTLENBQUM7WUFDUCxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQztZQUM5QyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7WUFDM0IsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQzVCLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUNuQyxDQUFDLEVBQUUsVUFBQSxHQUFHO1lBQ0YsS0FBSyxDQUFDLDZCQUE2QixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDdkUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBekJRLGlCQUFpQjtRQVA3QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztZQUN2QyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1lBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUN0QixDQUFDO3lDQUtzQixlQUFNO1lBQ0QsMEJBQVc7WUFDbEIsV0FBSTtPQU5iLGlCQUFpQixDQTBCN0I7SUFBRCx3QkFBQztDQUFBLEFBMUJELElBMEJDO0FBMUJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWxzL3VzZXIubW9kZWwnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25zLXJlZ2lzdGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MnXSxcbiAgICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHVzZXI6IFVzZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZVxuICAgICkge1xuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZWdpc3Rybygpe1xuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcilcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBhbGVydChcIlN1IGN1ZW50YSBzZSBjcmVvIHNhdGlzZmFjdG9yaWFtZW50ZVwiKTtcbiAgICAgICAgICAgIHRoaXMudXNlci5uYW1lID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkID0gdW5kZWZpbmVkO1xuICAgICAgICB9LCBlcnIgPT57XG4gICAgICAgICAgICBhbGVydChcIk9jdXJyaW8gZWwgc2lndWllbnRlIGVycm9yOlwiICsgSlNPTi5zdHJpbmdpZnkoZXJyLm1lc3NhZ2UpKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19