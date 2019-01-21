import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Task } from '../models/task.model';
import { TasksService } from "../services/tasks.service";

import { TextField } from "tns-core-modules/ui/text-field";
import { ListViewEventData, RadListView } from "nativescript-ui-listview";
import { View } from "tns-core-modules/ui/core/view";

@Component({
    selector: 'ns-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
    providers: [TasksService],
    moduleId: module.id,
})
export class ListComponent implements OnInit {

    taskList: Array<Task> = [];
    task = "";
    isLoading = false;
    listLoaded = false;
    @ViewChild("taskTextField") taskTextField: ElementRef;

    constructor(private tasksService: TasksService) { }

    ngOnInit() {
        this.isLoading = true;
        
        this.tasksService.listTasks()
        .subscribe( loadedTask =>{
            this.taskList = loadedTask.tasks;
            this.isLoading = false;
            this.listLoaded = true;
        },err =>{
            alert("Ocurrio el siguiente error:" + JSON.stringify(err.message));
        });

    }

    add(){
        if(this.task.trim() === ''){
            alert("Ingrese el nombre de la tarea");
            return;
        }

        let textField = <TextField>this.taskTextField.nativeElement;
        textField.dismissSoftInput();

        this.tasksService.add(this.task)
        .subscribe(taskObject=>{
            this.taskList.unshift(taskObject.task);
            this.task = "";
        }, err =>{
            alert({
                message: "Ocurrio el siguiente error: " + JSON.stringify(err.message),
                okButtonText: "OK"
            });
            this.task = "";
        });
    }

    delete(args: ListViewEventData) {
        let task1 = <Task>args.object.bindingContext;
        this.tasksService.delete(task1._id)
            .subscribe(() => {
                let index = this.taskList.indexOf(task1);
                this.taskList.splice(index, 1);
            }, err =>{
                alert("Ocurrio el siguiente error:" + JSON.stringify(err.message));
            });
    }
    onSwipeCellStarted(args: ListViewEventData) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args.object;
        var rightItem = swipeView.getViewById<View>("delete-view");
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.left = 0;
        swipeLimits.threshold = rightItem.getMeasuredWidth() / 2;
    }
}
