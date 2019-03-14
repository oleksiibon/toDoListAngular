import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() tasks;
  //tasks = [{name: 'Some', isDone: false, listId: 0, id: 0}, {name: 'Done', isDone: false, listId: 0, id: 1}];
  @Output() updateTask = new EventEmitter<any>();
  @Output() deleteTask = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  addTask(event) {
    console.log(event);
  }

  updateOneTask(event) {
    this.updateTask.emit(event);
  }
  deleteOneTask(event) {
    this.deleteTask.emit(event);
  }
}
