import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  @Output() changeList = new EventEmitter();
  @Output() addList = new EventEmitter();
  @Output() deleteList = new EventEmitter();
  @Input() currentList: number;
  @Input() lists: [];

  constructor() {
  }

  ngOnInit() {
  }

  addNewList(name: HTMLInputElement) {
    this.addList.emit({name: name.value});
    name.value = '';
  }

  changeCurrentList(id: number) {
    this.changeList.emit(id);
  }

  deleteOneList(id) {
    this.deleteList.emit(id);
  }

  keyUp($event: KeyboardEvent) {
    if ($event.key === 'Enter') {
      this.addNewList($event.currentTarget as HTMLInputElement);
    }
  }
}
