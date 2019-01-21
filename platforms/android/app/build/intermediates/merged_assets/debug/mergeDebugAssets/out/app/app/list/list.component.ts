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
    tasks = "";
    isLoading = false;
    listLoaded = false;
    @ViewChild("taskTextField") taskTextField: ElementRef;

    constructor(private tasksService: TasksService) { }

    ngOnInit() {
        this.isLoading = true;
        
        this.tasksService.listTasks()
        .subscribe( loadedTask =>{
            let listTask = [];
            listTask = loadedTask;
            this.isLoading = false;
            this.listLoaded = true;
        })

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
