import {Component, OnChanges, OnInit} from '@angular/core';
import {DataSourceService} from '../service/dataSource.service';
import {List} from '../List';

import {Task} from '../Task';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnChanges {
  lists: Array<List>;
  tasks: Array<Task>;

  constructor(private dataSource: DataSourceService) {
  }

  ngOnInit() {
    this.getLists();
    this.getTasks();
  }
  ngOnChanges() {
    this.getTasks();
  }
  getLists() {
    this.dataSource.getLists().subscribe((data: Array<List>) => {
      this.lists = data.sort((a, b) => {
        if (a.pin && !b.pin) {
          return -1;
        } else {
          return 1;
        }
      });
    });
  }

  getTasks() {
    this.dataSource.getUnDoneTask().subscribe((tasks: Array<Task>) => {
      this.tasks = tasks;
    });
  }

  changePin(data) {
    this.dataSource.changePin(data.id, data.pin).subscribe(() => {
      this.getLists();
    });
  }
}
