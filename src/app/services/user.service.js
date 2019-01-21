"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var config_1 = require("../config/config");
require("nativescript-localstorage");
var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
        this.URL_SERVICIO = config_1.Config.apiUrl;
    }
    UserService.prototype.register = function (user) {
        if (!user.email || !user.name || !user.password) {
            return rxjs_1.throwError("Ingrese todos los datos.");
        }
        return this._http.post(config_1.Config.apiUrl + "register/", JSON.stringify({
            name: user.name,
            email: user.email,
            password: user.password
        }), { headers: this.getCommonHeaders() });
    };
    UserService.prototype.login = function (user) {
        return this._http.post(config_1.Config.apiUrl + "login", JSON.stringify({
            email: user.email,
            password: user.password
        }), { headers: this.getCommonHeaders() }).pipe(operators_1.map(function (Response) { return Response.json(); }), operators_1.catchError(this.handleErrors));
    };
    UserService.prototype.getCommonHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return headers;
    };
    UserService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return rxjs_1.throwError(error.json());
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw2QkFBOEM7QUFDOUMsNENBQXNEO0FBQ3RELDJDQUEwQztBQUUxQyxPQUFPLENBQUUsMkJBQTJCLENBQUUsQ0FBQztBQUl2QztJQUdJLHFCQUNZLEtBQVU7UUFBVixVQUFLLEdBQUwsS0FBSyxDQUFLO1FBSHRCLGlCQUFZLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBQztJQUkzQixDQUFDO0lBRUgsOEJBQVEsR0FBUixVQUFTLElBQVU7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzVDLE9BQU8saUJBQVUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1NBQ2pEO1FBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDbEIsZUFBTSxDQUFDLE1BQU0sR0FBRyxXQUFXLEVBQzNCLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQzFCLENBQUMsRUFDRixFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUN2QyxDQUFDO0lBQ04sQ0FBQztJQUVELDJCQUFLLEdBQUwsVUFBTSxJQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDbEIsZUFBTSxDQUFDLE1BQU0sR0FBRyxPQUFPLEVBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDWCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQzFCLENBQUMsRUFDRixFQUFFLE9BQU8sRUFBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBQyxDQUN2QyxDQUFDLElBQUksQ0FDRixlQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLEVBQ2hDLHNCQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUNoQyxDQUFBO0lBQ0wsQ0FBQztJQUVELHNDQUFnQixHQUFoQjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQsa0NBQVksR0FBWixVQUFhLEtBQWU7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsT0FBTyxpQkFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUE5Q1EsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUtTLFdBQUk7T0FKYixXQUFXLENBK0N2QjtJQUFELGtCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7QUEvQ1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgdGFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcvY29uZmlnJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2RlbHMvdXNlci5tb2RlbCc7XG5yZXF1aXJlKCBcIm5hdGl2ZXNjcmlwdC1sb2NhbHN0b3JhZ2VcIiApO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZXtcbiAgICBVUkxfU0VSVklDSU8gPSBDb25maWcuYXBpVXJsO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX2h0dHA6SHR0cFxuICAgICl7fVxuXG4gICAgcmVnaXN0ZXIodXNlcjogVXNlcikge1xuICAgICAgICBpZiAoIXVzZXIuZW1haWwgfHwgIXVzZXIubmFtZSB8fCF1c2VyLnBhc3N3b3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihcIkluZ3Jlc2UgdG9kb3MgbG9zIGRhdG9zLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoXG4gICAgICAgICAgICBDb25maWcuYXBpVXJsICsgXCJyZWdpc3Rlci9cIixcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgeyBoZWFkZXJzOiB0aGlzLmdldENvbW1vbkhlYWRlcnMoKSB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgbG9naW4odXNlcjogVXNlcil7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoXG4gICAgICAgICAgICBDb25maWcuYXBpVXJsICsgXCJsb2dpblwiLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHsgaGVhZGVycyA6IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpfVxuICAgICAgICApLnBpcGUoXG4gICAgICAgICAgICBtYXAoUmVzcG9uc2UgPT4gUmVzcG9uc2UuanNvbigpKSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcnMpXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBnZXRDb21tb25IZWFkZXJzKCkge1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgfVxuXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IuanNvbigpKTtcbiAgICB9XG59Il19