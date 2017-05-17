import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-task-list',
	templateUrl: './task-list.component.html',
	styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

	tasks: any[] = [
		{title: "First Task", complete: false},
		{title: "Second Task", complete: false},
		{title: "Third Task", complete: false}
	];


	constructor() { }

	ngOnInit() {
	}

}
