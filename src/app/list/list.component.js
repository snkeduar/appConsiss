"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tasks_service_1 = require("../services/tasks.service");
var ListComponent = /** @class */ (function () {
    function ListComponent(tasksService) {
        this.tasksService = tasksService;
        this.taskList = [];
        this.task = "";
        this.isLoading = false;
        this.listLoaded = false;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.tasksService.listTasks()
            .subscribe(function (loadedTask) {
            _this.taskList = loadedTask.tasks;
            _this.isLoading = false;
            _this.listLoaded = true;
        }, function (err) {
            alert("Ocurrio el siguiente error:" + JSON.stringify(err.message));
        });
    };
    ListComponent.prototype.add = function () {
        var _this = this;
        if (this.task.trim() === '') {
            alert("Ingrese el nombre de la tarea");
            return;
        }
        var textField = this.taskTextField.nativeElement;
        textField.dismissSoftInput();
        this.tasksService.add(this.task)
            .subscribe(function (taskObject) {
            _this.taskList.unshift(taskObject.task);
            _this.task = "";
        }, function (err) {
            alert({
                message: "Ocurrio el siguiente error: " + JSON.stringify(err.message),
                okButtonText: "OK"
            });
            _this.task = "";
        });
    };
    ListComponent.prototype.delete = function (args) {
        var _this = this;
        var task1 = args.object.bindingContext;
        this.tasksService.delete(task1._id)
            .subscribe(function () {
            var index = _this.taskList.indexOf(task1);
            _this.taskList.splice(index, 1);
        }, function (err) {
            alert("Ocurrio el siguiente error:" + JSON.stringify(err.message));
        });
    };
    ListComponent.prototype.onSwipeCellStarted = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args.object;
        var rightItem = swipeView.getViewById("delete-view");
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.left = 0;
        swipeLimits.threshold = rightItem.getMeasuredWidth() / 2;
    };
    __decorate([
        core_1.ViewChild("taskTextField"),
        __metadata("design:type", core_1.ElementRef)
    ], ListComponent.prototype, "taskTextField", void 0);
    ListComponent = __decorate([
        core_1.Component({
            selector: 'ns-list',
            templateUrl: './list.component.html',
            styleUrls: ['./list.component.css'],
            providers: [tasks_service_1.TasksService],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [tasks_service_1.TasksService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUd6RSwyREFBeUQ7QUFhekQ7SUFRSSx1QkFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFOOUMsYUFBUSxHQUFnQixFQUFFLENBQUM7UUFDM0IsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZUFBVSxHQUFHLEtBQUssQ0FBQztJQUcrQixDQUFDO0lBRW5ELGdDQUFRLEdBQVI7UUFBQSxpQkFZQztRQVhHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXRCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFO2FBQzVCLFNBQVMsQ0FBRSxVQUFBLFVBQVU7WUFDbEIsS0FBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQzNCLENBQUMsRUFBQyxVQUFBLEdBQUc7WUFDRCxLQUFLLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN2RSxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCwyQkFBRyxHQUFIO1FBQUEsaUJBb0JDO1FBbkJHLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUM7WUFDdkIsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7WUFDdkMsT0FBTztTQUNWO1FBRUQsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7UUFDNUQsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUMvQixTQUFTLENBQUMsVUFBQSxVQUFVO1lBQ2pCLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNuQixDQUFDLEVBQUUsVUFBQSxHQUFHO1lBQ0YsS0FBSyxDQUFDO2dCQUNGLE9BQU8sRUFBRSw4QkFBOEIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7Z0JBQ3JFLFlBQVksRUFBRSxJQUFJO2FBQ3JCLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFBTyxJQUF1QjtRQUE5QixpQkFTQztRQVJHLElBQUksS0FBSyxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzdDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDOUIsU0FBUyxDQUFDO1lBQ1AsSUFBSSxLQUFLLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUMsRUFBRSxVQUFBLEdBQUc7WUFDRixLQUFLLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN2RSxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCwwQ0FBa0IsR0FBbEIsVUFBbUIsSUFBdUI7UUFDdEMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDeEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1QixJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFPLGFBQWEsQ0FBQyxDQUFDO1FBQzNELFdBQVcsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDakQsV0FBVyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDckIsV0FBVyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQXpEMkI7UUFBM0IsZ0JBQVMsQ0FBQyxlQUFlLENBQUM7a0NBQWdCLGlCQUFVO3dEQUFDO0lBTjdDLGFBQWE7UUFQekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDdEIsQ0FBQzt5Q0FTb0MsNEJBQVk7T0FSckMsYUFBYSxDQWdFekI7SUFBRCxvQkFBQztDQUFBLEFBaEVELElBZ0VDO0FBaEVZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi4vbW9kZWxzL3Rhc2subW9kZWwnO1xuaW1wb3J0IHsgVGFza3NTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Rhc2tzLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC1maWVsZFwiO1xuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25zLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9saXN0LmNvbXBvbmVudC5jc3MnXSxcbiAgICBwcm92aWRlcnM6IFtUYXNrc1NlcnZpY2VdLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgdGFza0xpc3Q6IEFycmF5PFRhc2s+ID0gW107XG4gICAgdGFzayA9IFwiXCI7XG4gICAgaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgbGlzdExvYWRlZCA9IGZhbHNlO1xuICAgIEBWaWV3Q2hpbGQoXCJ0YXNrVGV4dEZpZWxkXCIpIHRhc2tUZXh0RmllbGQ6IEVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRhc2tzU2VydmljZTogVGFza3NTZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnRhc2tzU2VydmljZS5saXN0VGFza3MoKVxuICAgICAgICAuc3Vic2NyaWJlKCBsb2FkZWRUYXNrID0+e1xuICAgICAgICAgICAgdGhpcy50YXNrTGlzdCA9IGxvYWRlZFRhc2sudGFza3M7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5saXN0TG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgfSxlcnIgPT57XG4gICAgICAgICAgICBhbGVydChcIk9jdXJyaW8gZWwgc2lndWllbnRlIGVycm9yOlwiICsgSlNPTi5zdHJpbmdpZnkoZXJyLm1lc3NhZ2UpKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBhZGQoKXtcbiAgICAgICAgaWYodGhpcy50YXNrLnRyaW0oKSA9PT0gJycpe1xuICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIGVsIG5vbWJyZSBkZSBsYSB0YXJlYVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPnRoaXMudGFza1RleHRGaWVsZC5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0ZXh0RmllbGQuZGlzbWlzc1NvZnRJbnB1dCgpO1xuXG4gICAgICAgIHRoaXMudGFza3NTZXJ2aWNlLmFkZCh0aGlzLnRhc2spXG4gICAgICAgIC5zdWJzY3JpYmUodGFza09iamVjdD0+e1xuICAgICAgICAgICAgdGhpcy50YXNrTGlzdC51bnNoaWZ0KHRhc2tPYmplY3QudGFzayk7XG4gICAgICAgICAgICB0aGlzLnRhc2sgPSBcIlwiO1xuICAgICAgICB9LCBlcnIgPT57XG4gICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJPY3VycmlvIGVsIHNpZ3VpZW50ZSBlcnJvcjogXCIgKyBKU09OLnN0cmluZ2lmeShlcnIubWVzc2FnZSksXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy50YXNrID0gXCJcIjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVsZXRlKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIGxldCB0YXNrMSA9IDxUYXNrPmFyZ3Mub2JqZWN0LmJpbmRpbmdDb250ZXh0O1xuICAgICAgICB0aGlzLnRhc2tzU2VydmljZS5kZWxldGUodGFzazEuX2lkKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy50YXNrTGlzdC5pbmRleE9mKHRhc2sxKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9LCBlcnIgPT57XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJPY3VycmlvIGVsIHNpZ3VpZW50ZSBlcnJvcjpcIiArIEpTT04uc3RyaW5naWZ5KGVyci5tZXNzYWdlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgb25Td2lwZUNlbGxTdGFydGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIHZhciBzd2lwZUxpbWl0cyA9IGFyZ3MuZGF0YS5zd2lwZUxpbWl0cztcbiAgICAgICAgdmFyIHN3aXBlVmlldyA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICB2YXIgcmlnaHRJdGVtID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkPFZpZXc+KFwiZGVsZXRlLXZpZXdcIik7XG4gICAgICAgIHN3aXBlTGltaXRzLnJpZ2h0ID0gcmlnaHRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKTtcbiAgICAgICAgc3dpcGVMaW1pdHMubGVmdCA9IDA7XG4gICAgICAgIHN3aXBlTGltaXRzLnRocmVzaG9sZCA9IHJpZ2h0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCkgLyAyO1xuICAgIH1cbn1cbiJdfQ==