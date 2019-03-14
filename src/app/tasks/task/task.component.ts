import {Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import {Task} from '../../Task';

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
    this.name =  this.task.name;
  }

  change() {
    this.isChange = true;
    // this.changeTask.nativeElement.focus = true;
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
    this.task.isDone = !this.task.isDone;
    this.updateTask.emit(this.task);
  }
}
