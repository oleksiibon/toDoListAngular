import {Component, Input, OnInit} from '@angular/core';
import {DataSourceService} from '../../service/dataSource.service';
import {Task} from '../../Task';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() list;
  tasks: Array<Task> = [];

  constructor(private dataSource: DataSourceService) {
  }

  ngOnInit() {
    this.dataSource.getTasks(this.list.id).subscribe((data: Array<Task>) => {
      for (let i = 0; i < 3; i++) {
        if (data[i] !== undefined) {
          this.tasks.push(data[i]);
        }
      }
        });
  }

}
