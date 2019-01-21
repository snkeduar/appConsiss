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
    TasksService.prototype.add = function (name) {
        if (!name) {
            return rxjs_1.throwError("Ingrese correctamente la información de la tarea");
        }
        return this._http.post(config_1.Config.apiUrl + "save-task", JSON.stringify({
            name: name
        }), { headers: this.getCommonHeaders() }).pipe(operators_1.map(function (Response) { return Response.json(); }), operators_1.catchError(this.handleErrors));
    };
    TasksService.prototype.delete = function (id) {
        if (!id) {
            return rxjs_1.throwError("Seleccione una tarea valida ");
        }
        return this._http.delete(config_1.Config.apiUrl + "task" + "/" + id, { headers: this.getCommonHeaders() }).pipe(operators_1.map(function (res) { return res.json(); }), operators_1.catchError(this.handleErrors));
    };
    TasksService.prototype.getCommonHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", localStorage.getItem('token'));
        return headers;
    };
    TasksService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return rxjs_1.throwError(error.json());
    };
    TasksService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], TasksService);
    return TasksService;
}());
exports.TasksService = TasksService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhc2tzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXdEO0FBQ3hELDZCQUE4QztBQUM5Qyw0Q0FBc0Q7QUFDdEQsMkNBQTBDO0FBRTFDLE9BQU8sQ0FBRSwyQkFBMkIsQ0FBRSxDQUFDO0FBR3ZDO0lBRUksc0JBQ1ksS0FBVTtRQUFWLFVBQUssR0FBTCxLQUFLLENBQUs7SUFHdEIsQ0FBQztJQUVELGdDQUFTLEdBQVQ7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUNqQixlQUFNLENBQUMsTUFBTSxHQUFHLFlBQVksRUFDNUIsRUFBRSxPQUFPLEVBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FDeEMsQ0FBQyxJQUFJLENBQ0YsZUFBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxFQUNoQyxzQkFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDaEMsQ0FBQTtJQUNMLENBQUM7SUFFRCwwQkFBRyxHQUFILFVBQUksSUFBWTtRQUNaLElBQUcsQ0FBQyxJQUFJLEVBQUM7WUFDTCxPQUFPLGlCQUFVLENBQUMsa0RBQWtELENBQUMsQ0FBQztTQUN6RTtRQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2xCLGVBQU0sQ0FBQyxNQUFNLEdBQUcsV0FBVyxFQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ1gsSUFBSSxFQUFHLElBQUk7U0FDZCxDQUFDLEVBQ0YsRUFBRSxPQUFPLEVBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FDeEMsQ0FBQyxJQUFJLENBQ0YsZUFBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxFQUNoQyxzQkFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDaEMsQ0FBQztJQUNOLENBQUM7SUFFRCw2QkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNiLElBQUcsQ0FBQyxFQUFFLEVBQUM7WUFDSCxPQUFPLGlCQUFVLENBQUMsOEJBQThCLENBQUMsQ0FBQztTQUNyRDtRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQ3BCLGVBQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFFLEdBQUcsR0FBRyxFQUFFLEVBQ2hDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQ3ZDLENBQUMsSUFBSSxDQUNGLGVBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsRUFDdEIsc0JBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQ2hDLENBQUE7SUFDTCxDQUFDO0lBRUQsdUNBQWdCLEdBQWhCO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMvRCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQsbUNBQVksR0FBWixVQUFhLEtBQWU7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsT0FBTyxpQkFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUExRFEsWUFBWTtRQUR4QixpQkFBVSxFQUFFO3lDQUlTLFdBQUk7T0FIYixZQUFZLENBMkR4QjtJQUFELG1CQUFDO0NBQUEsQUEzREQsSUEyREM7QUEzRFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCB0YXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcnO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4uL21vZGVscy90YXNrLm1vZGVsJztcbnJlcXVpcmUoIFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiICk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUYXNrc1NlcnZpY2V7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfaHR0cDpIdHRwXG4gICAgKXtcblxuICAgIH1cblxuICAgIGxpc3RUYXNrcygpe1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoXG4gICAgICAgICAgICBDb25maWcuYXBpVXJsICsgXCJsaXN0LXRhc2tzXCIsXG4gICAgICAgICAgICB7IGhlYWRlcnMgOiB0aGlzLmdldENvbW1vbkhlYWRlcnMoKSB9XG4gICAgICAgICkucGlwZShcbiAgICAgICAgICAgIG1hcChSZXNwb25zZSA9PiBSZXNwb25zZS5qc29uKCkpLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9ycylcbiAgICAgICAgKVxuICAgIH1cblxuICAgIGFkZChuYW1lOiBzdHJpbmcpe1xuICAgICAgICBpZighbmFtZSl7XG4gICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihcIkluZ3Jlc2UgY29ycmVjdGFtZW50ZSBsYSBpbmZvcm1hY2nDs24gZGUgbGEgdGFyZWFcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KFxuICAgICAgICAgICAgQ29uZmlnLmFwaVVybCArIFwic2F2ZS10YXNrXCIsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgbmFtZSA6IG5hbWVcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgeyBoZWFkZXJzIDogdGhpcy5nZXRDb21tb25IZWFkZXJzKCkgfVxuICAgICAgICApLnBpcGUoXG4gICAgICAgICAgICBtYXAoUmVzcG9uc2UgPT4gUmVzcG9uc2UuanNvbigpKSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcnMpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZGVsZXRlKGlkOiBzdHJpbmcpe1xuICAgICAgICBpZighaWQpe1xuICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoXCJTZWxlY2Npb25lIHVuYSB0YXJlYSB2YWxpZGEgXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZShcbiAgICAgICAgICAgIENvbmZpZy5hcGlVcmwgKyBcInRhc2tcIiArXCIvXCIgKyBpZCxcbiAgICAgICAgICAgIHsgaGVhZGVyczogdGhpcy5nZXRDb21tb25IZWFkZXJzKCkgfVxuICAgICAgICApLnBpcGUoXG4gICAgICAgICAgICBtYXAocmVzID0+IHJlcy5qc29uKCkpLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9ycylcbiAgICAgICAgKVxuICAgIH1cblxuICAgIGdldENvbW1vbkhlYWRlcnMoKSB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpO1xuICAgICAgICByZXR1cm4gaGVhZGVycztcbiAgICB9XG5cbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpO1xuICAgIH1cbn0iXX0=