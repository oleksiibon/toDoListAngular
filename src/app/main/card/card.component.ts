import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataSourceService} from '../../service/dataSource.service';
import {Task} from '../../Task';
import {List} from '../../List';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Output() changeCurrentPin = new EventEmitter();
  @Input() list;
  tasks: Array<Task> = [];
  cardFooter = '';
  pin;


  constructor(private dataSource: DataSourceService, private router: Router) {
  }

  ngOnInit() {
    this.pin = this.list.pin ? 'Unpin' : 'Pin';
    this.dataSource.getTasks(this.list.id).subscribe((data: Array<Task>) => {
      data = data.filter(e => e.done === false);
      for (let i = 0; i < 5; i++) {
        if (data[i] !== undefined) {
          this.tasks.push(data[i]);
        }
      }
      if (data.length > 5) {
        this.cardFooter = '. . .';
      }
    });
  }

  goTo(list: List) {
    console.log(list);
    this.router.navigate(['list/', list.id]);
  }

  changePin() {
    this.changeCurrentPin.emit({id: this.list.id, pin: !this.list.pin});
  }
}
