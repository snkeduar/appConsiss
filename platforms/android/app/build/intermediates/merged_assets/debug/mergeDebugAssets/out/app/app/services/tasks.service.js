"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var config_1 = require("../config/config");
require("nativescript-localstorage");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhc2tzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXdEO0FBQ3hELDZCQUE4QztBQUM5Qyw0Q0FBc0Q7QUFDdEQsMkNBQTBDO0FBRTFDLE9BQU8sQ0FBRSwyQkFBMkIsQ0FBRSxDQUFDO0FBR3ZDO0lBRUksc0JBQ1ksS0FBVTtRQUFWLFVBQUssR0FBTCxLQUFLLENBQUs7SUFHdEIsQ0FBQztJQUVELGdDQUFTLEdBQVQ7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUNqQixlQUFNLENBQUMsTUFBTSxHQUFHLFlBQVksRUFDNUIsRUFBRSxPQUFPLEVBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FDeEMsQ0FBQyxJQUFJLENBQ0YsZUFBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxFQUNoQyxzQkFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDaEMsQ0FBQTtJQUNMLENBQUM7SUFFRCwwQkFBRyxHQUFILFVBQUksSUFBVTtRQUNWLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUMzQixPQUFPLGlCQUFVLENBQUMsaURBQWlELENBQUMsQ0FBQztTQUN4RTtRQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2xCLGVBQU0sQ0FBQyxNQUFNLEdBQUcsV0FBVyxFQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ1gsSUFBSSxFQUFHLElBQUksQ0FBQyxJQUFJO1lBQ2hCLElBQUksRUFBRyxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDLEVBQ0YsRUFBRSxPQUFPLEVBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FDeEMsQ0FBQyxJQUFJLENBQ0YsZUFBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxFQUNoQyxzQkFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDaEMsQ0FBQztJQUNOLENBQUM7SUFFRCw2QkFBTSxHQUFOLFVBQU8sSUFBVTtRQUNiLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUMzQixPQUFPLGlCQUFVLENBQUMsOEJBQThCLENBQUMsQ0FBQztTQUNyRDtRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQ3BCLGVBQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUMxQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUN2QyxDQUFDLElBQUksQ0FDRixlQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLEVBQ3RCLHNCQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUNoQyxDQUFBO0lBQ0wsQ0FBQztJQUVELHVDQUFnQixHQUFoQjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDL0QsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELG1DQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE9BQU8saUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQTNEUSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7eUNBSVMsV0FBSTtPQUhiLFlBQVksQ0E0RHhCO0lBQUQsbUJBQUM7Q0FBQSxBQTVERCxJQTREQztBQTVEWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHRhcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZyc7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi4vbW9kZWxzL3Rhc2subW9kZWwnO1xucmVxdWlyZSggXCJuYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlXCIgKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRhc2tzU2VydmljZXtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9odHRwOkh0dHBcbiAgICApe1xuXG4gICAgfVxuXG4gICAgbGlzdFRhc2tzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChcbiAgICAgICAgICAgIENvbmZpZy5hcGlVcmwgKyBcImxpc3QtdGFza3NcIixcbiAgICAgICAgICAgIHsgaGVhZGVycyA6IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpIH1cbiAgICAgICAgKS5waXBlKFxuICAgICAgICAgICAgbWFwKFJlc3BvbnNlID0+IFJlc3BvbnNlLmpzb24oKSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3JzKVxuICAgICAgICApXG4gICAgfVxuXG4gICAgYWRkKHRhc2s6IFRhc2spe1xuICAgICAgICBpZighdGFzay5uYW1lIHx8ICF0YXNrLmlkX3VzZXIpe1xuICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoXCJJbmdyZXNlIGNvcnJlY3RhbWVudCBsYSBpbmZvcm1hY2nDs24gZGUgbGEgdGFyZWFcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KFxuICAgICAgICAgICAgQ29uZmlnLmFwaVVybCArIFwic2F2ZS10YXNrXCIsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgbmFtZSA6IHRhc2submFtZSxcbiAgICAgICAgICAgICAgICB1c2VyIDogdGFzay5pZF91c2VyXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHsgaGVhZGVycyA6IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpIH1cbiAgICAgICAgKS5waXBlKFxuICAgICAgICAgICAgbWFwKFJlc3BvbnNlID0+IFJlc3BvbnNlLmpzb24oKSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3JzKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGRlbGV0ZSh0YXNrOiBUYXNrKXtcbiAgICAgICAgaWYoIXRhc2submFtZSB8fCAhdGFzay5pZF91c2VyKXtcbiAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKFwiU2VsZWNjaW9uZSB1bmEgdGFyZWEgdmFsaWRhIFwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGUoXG4gICAgICAgICAgICBDb25maWcuYXBpVXJsICsgXCJ0YXNrXCIgK1wiL1wiICsgdGFzay5pZF91c2VyLFxuICAgICAgICAgICAgeyBoZWFkZXJzOiB0aGlzLmdldENvbW1vbkhlYWRlcnMoKSB9XG4gICAgICAgICkucGlwZShcbiAgICAgICAgICAgIG1hcChyZXMgPT4gcmVzLmpzb24oKSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3JzKVxuICAgICAgICApXG4gICAgfVxuXG4gICAgZ2V0Q29tbW9uSGVhZGVycygpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSk7XG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgIH1cblxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgICB9XG59Il19