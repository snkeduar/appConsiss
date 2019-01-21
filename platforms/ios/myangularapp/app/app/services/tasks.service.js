"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var config_1 = require("../config/config");
var TasksService = /** @class */ (function () {
    function TasksService(_http) {
        this._http = _http;
    }
    TasksService.prototype.listTasks = function () {
        return this._http.get(config_1.Config.apiUrl + "list-tasks", { headers: this.getCommonHeaders() }).pipe(operators_1.map(function (Response) { return Response.json(); }), operators_1.catchError(this.handleErrors));
    };
    TasksService.prototype.add = function (task) {
        if (!task.name || !task.id_user) {
            return rxjs_1.throwError("Ingrese correctament la información de la tarea");
        }
        return this._http.post(config_1.Config.apiUrl + "save-task", JSON.stringify({
            name: task.name,
            user: task.id_user
        }), { headers: this.getCommonHeaders() }).pipe(operators_1.map(function (Response) { return Response.json(); }), operators_1.catchError(this.handleErrors));
    };
    TasksService.prototype.delete = function (task) {
        if (!task.name || !task.id_user) {
            return rxjs_1.throwError("Seleccione una tarea valida ");
        }
        return this._http.delete(config_1.Config.apiUrl + "task" + "/" + task.id_user, { headers: this.getCommonHeaders() }).pipe(operators_1.map(function (res) { return res.json(); }), operators_1.catchError(this.handleErrors));
    };
    TasksService.prototype.getCommonHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", localStorage.getItem('token'));
        return headers;
    };
    TasksService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return rxjs_1.Observable.throw(error);
    };
    TasksService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], TasksService);
    return TasksService;
}());
exports.TasksService = TasksService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhc2tzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXdEO0FBQ3hELDZCQUE4QztBQUM5Qyw0Q0FBc0Q7QUFDdEQsMkNBQTBDO0FBSzFDO0lBRUksc0JBQ1ksS0FBVTtRQUFWLFVBQUssR0FBTCxLQUFLLENBQUs7SUFHdEIsQ0FBQztJQUVELGdDQUFTLEdBQVQ7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUNqQixlQUFNLENBQUMsTUFBTSxHQUFHLFlBQVksRUFDNUIsRUFBRSxPQUFPLEVBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FDeEMsQ0FBQyxJQUFJLENBQ0YsZUFBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxFQUNoQyxzQkFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDaEMsQ0FBQTtJQUNMLENBQUM7SUFFRCwwQkFBRyxHQUFILFVBQUksSUFBVTtRQUNWLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUMzQixPQUFPLGlCQUFVLENBQUMsaURBQWlELENBQUMsQ0FBQztTQUN4RTtRQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2xCLGVBQU0sQ0FBQyxNQUFNLEdBQUcsV0FBVyxFQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ1gsSUFBSSxFQUFHLElBQUksQ0FBQyxJQUFJO1lBQ2hCLElBQUksRUFBRyxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDLEVBQ0YsRUFBRSxPQUFPLEVBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FDeEMsQ0FBQyxJQUFJLENBQ0YsZUFBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxFQUNoQyxzQkFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDaEMsQ0FBQztJQUNOLENBQUM7SUFFRCw2QkFBTSxHQUFOLFVBQU8sSUFBVTtRQUNiLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUMzQixPQUFPLGlCQUFVLENBQUMsOEJBQThCLENBQUMsQ0FBQztTQUNyRDtRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQ3BCLGVBQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUMxQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUN2QyxDQUFDLElBQUksQ0FDRixlQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLEVBQ3RCLHNCQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUNoQyxDQUFBO0lBQ0wsQ0FBQztJQUVELHVDQUFnQixHQUFoQjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDL0QsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELG1DQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE9BQU8saUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQTNEUSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7eUNBSVMsV0FBSTtPQUhiLFlBQVksQ0E0RHhCO0lBQUQsbUJBQUM7Q0FBQSxBQTVERCxJQTREQztBQTVEWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHRhcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZyc7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi4vbW9kZWxzL3Rhc2subW9kZWwnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUYXNrc1NlcnZpY2V7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfaHR0cDpIdHRwXG4gICAgKXtcblxuICAgIH1cblxuICAgIGxpc3RUYXNrcygpe1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoXG4gICAgICAgICAgICBDb25maWcuYXBpVXJsICsgXCJsaXN0LXRhc2tzXCIsXG4gICAgICAgICAgICB7IGhlYWRlcnMgOiB0aGlzLmdldENvbW1vbkhlYWRlcnMoKSB9XG4gICAgICAgICkucGlwZShcbiAgICAgICAgICAgIG1hcChSZXNwb25zZSA9PiBSZXNwb25zZS5qc29uKCkpLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9ycylcbiAgICAgICAgKVxuICAgIH1cblxuICAgIGFkZCh0YXNrOiBUYXNrKXtcbiAgICAgICAgaWYoIXRhc2submFtZSB8fCAhdGFzay5pZF91c2VyKXtcbiAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKFwiSW5ncmVzZSBjb3JyZWN0YW1lbnQgbGEgaW5mb3JtYWNpw7NuIGRlIGxhIHRhcmVhXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChcbiAgICAgICAgICAgIENvbmZpZy5hcGlVcmwgKyBcInNhdmUtdGFza1wiLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIG5hbWUgOiB0YXNrLm5hbWUsXG4gICAgICAgICAgICAgICAgdXNlciA6IHRhc2suaWRfdXNlclxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB7IGhlYWRlcnMgOiB0aGlzLmdldENvbW1vbkhlYWRlcnMoKSB9XG4gICAgICAgICkucGlwZShcbiAgICAgICAgICAgIG1hcChSZXNwb25zZSA9PiBSZXNwb25zZS5qc29uKCkpLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9ycylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBkZWxldGUodGFzazogVGFzayl7XG4gICAgICAgIGlmKCF0YXNrLm5hbWUgfHwgIXRhc2suaWRfdXNlcil7XG4gICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihcIlNlbGVjY2lvbmUgdW5hIHRhcmVhIHZhbGlkYSBcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKFxuICAgICAgICAgICAgQ29uZmlnLmFwaVVybCArIFwidGFza1wiICtcIi9cIiArIHRhc2suaWRfdXNlcixcbiAgICAgICAgICAgIHsgaGVhZGVyczogdGhpcy5nZXRDb21tb25IZWFkZXJzKCkgfVxuICAgICAgICApLnBpcGUoXG4gICAgICAgICAgICBtYXAocmVzID0+IHJlcy5qc29uKCkpLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9ycylcbiAgICAgICAgKVxuICAgIH1cblxuICAgIGdldENvbW1vbkhlYWRlcnMoKSB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpO1xuICAgICAgICByZXR1cm4gaGVhZGVycztcbiAgICB9XG5cbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gICAgfVxufSJdfQ==