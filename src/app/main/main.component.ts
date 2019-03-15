import { Component, OnInit } from '@angular/core';
import {DataSourceService} from '../service/dataSource.service';
import {List} from '../List';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  lists: Array<List>;
  constructor(private dataSource: DataSourceService, private router: Router) { }

  ngOnInit() {
    this.dataSource.getLists().subscribe((data: Array<List>) => {
      this.lists = data;
    });
  }

  goTo(list: List) {
    this.router.navigate(['/list', list.id]);
  }
}
