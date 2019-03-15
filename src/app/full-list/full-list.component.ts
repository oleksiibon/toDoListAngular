import { Component, OnInit } from '@angular/core';
import {DataSourceService} from '../service/dataSource.service';
import {List} from '../List';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Task} from '../Task';

@Component({
  selector: 'app-full-list',
  templateUrl: './full-list.component.html',
  styleUrls: ['./full-list.component.css']
})
export class FullListComponent implements OnInit {
  tasks: Array<Task>;
  currentListId = 0;
  lists: Array<List>;
  // router: Router;

  constructor(private dataSource: DataSourceService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentListId = +params.id;
      this.updateTasks();
      this.updateLists();
    });
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
    this.dataSource.getLists().subscribe((data: Array<List>) => {
      this.lists = data;
    });
  }

  changeList(id: number) {
    this.router.navigate(['/list', id]);
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

  addTask(taskName) {
    this.dataSource.addTask({name: taskName, listId: this.currentListId, isDone: false}).subscribe(() => {
      this.updateTasks();
    });
  }
}
