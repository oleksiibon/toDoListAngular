import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() tasks;
  @Output() updateTask = new EventEmitter<any>();
  @Output() deleteTask = new EventEmitter<any>();
  @Output() addTask = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  addNewTask(name) {
    this.addTask.emit(name);
  }

  updateOneTask(event) {
    this.updateTask.emit(event);
  }

  deleteOneTask(event) {
    this.deleteTask.emit(event);
  }

  keyUp($event: KeyboardEvent) {
    if ($event.key === 'Enter') {
      this.addNewTask($event.currentTarget);
    }
  }
}
