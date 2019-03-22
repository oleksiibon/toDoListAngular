import {Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task;
  @ViewChild('changeTask') changeTask: ElementRef;
  @Output() updateTask = new EventEmitter<any>();
  @Output() deleteTask = new EventEmitter<any>();
  isChange = false;
  name: string;

  constructor() {

  }

  ngOnInit() {
    this.name = this.task.name;
  }

  change(event, name: HTMLInputElement) {
    event.preventDefault();
    this.isChange = true;
    setTimeout(() => name.focus(), 10);
  }

  delete() {
    this.deleteTask.emit(this.task);
  }

  approveChange() {
    this.task.name = this.name;
    this.updateTask.emit(this.task);
    this.back();
  }

  back() {
    this.isChange = false;
  }

  doDone() {
    this.task.done = !this.task.done;
    this.updateTask.emit(this.task);
  }

  keyup($event: KeyboardEvent) {
    if ($event.key === 'Escape') {
      this.back();
    } else if ($event.key === 'Enter') {
      this.approveChange();
    }
  }
}
