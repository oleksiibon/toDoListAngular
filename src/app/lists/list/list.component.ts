import {Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {List} from '../../List';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, DoCheck {
  @Input() list: List;
  @Input() currentList: number;
  @Output() changeList = new EventEmitter();
  @Output() deleteList = new EventEmitter();
  isCurrent: boolean;
  constructor() { }

  ngOnInit() {
    this.isCurrent = this.currentList === this.list.id;
  }
  ngDoCheck() {
    this.isCurrent = this.currentList === this.list.id;
  }

  change() {
    this.changeList.emit(this.list.id);
  }

  delete() {
    this.deleteList.emit(this.list.id);
  }
}
