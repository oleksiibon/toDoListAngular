import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Task} from '../Task';
import {Observable} from 'rxjs';
import {List} from '../List';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  taskUrl = 'http://localhost:3000/tasks';
  listUrl = 'http://localhost:3000/lists';
  constructor(private  http: HttpClient) { }

  updateTask(task: Task): Observable<object>  {
    return this.http.patch(this.taskUrl + '/' + task.id, task);
  }
  deleteTask(task: Task) {
    return this.http.delete(this.taskUrl + '/' + task.id);
  }

  getTasks(listId: number) {
    return this.http.get(this.taskUrl + '?listId=' + listId);
  }
  getLists() {
    return this.http.get(this.listUrl);
  }

  addList(list: List) {
    return this.http.post(this.listUrl, list);
  }

  deleteList(id: number) {
    return this.http.delete(this.listUrl + '/' + id);
  }
}
