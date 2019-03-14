import {Component, Input, OnInit} from '@angular/core';
import {DataSourceService} from './service/dataSource.service';
import {Task} from './Task';
import {List} from './List';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todolisAngular';
  tasks: [];
  private currentListId = 0;
  lists: any;
  constructor(private dataSource: DataSourceService) {
  }

  ngOnInit() {
    this.updateTasks();
    this.updateLists();
  }

  updateTask($event) {
    this.dataSource.updateTask($event).subscribe((data: any) => {
    });
  }

  deleteTask($event: any) {
    this.dataSource.deleteTask($event).subscribe(() => {
      this.updateTasks();
    });
  }
  updateTasks() {
    this.dataSource.getTasks(this.currentListId).subscribe((tasks: any) => {
      this.tasks = tasks;
    });
  }

  private updateLists() {
    this.dataSource.getLists().subscribe((data) => {
      this.lists = data;
    });
  }

  changeList(id: number) {
    this.currentListId = id;
    this.updateTasks();
  }

  addList(list) {
    this.dataSource.addList(list).subscribe((data: List) => {
      this.updateLists();
      this.changeList(data.id);
    });
  }

  deleteList(id) {
    this.dataSource.deleteList(id).subscribe(() => {
      this.updateLists();
      this.updateTasks();
    });
  }
}
