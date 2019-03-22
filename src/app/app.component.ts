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

  constructor() {
  }

  ngOnInit() {
  }


}
