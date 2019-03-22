import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Task} from '../Task';
import {Observable} from 'rxjs';
import {List} from '../List';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  taskUrl = 'http://localhost:8081/tasks';
  listUrl = 'http://localhost:8081/lists';

  constructor(private  http: HttpClient) {
  }

  updateTask(task: Task): Observable<object> {
    return this.http.patch(this.taskUrl + '/' + task.id, task);
  }

  deleteTask(task: Task): Observable<object> {
    return this.http.delete(this.taskUrl + '/' + task.id);
  }

  getTasks(listId: number): Observable<object> {
    return this.http.get(this.taskUrl + '?listId=' + listId);
  }

  getLists(): Observable<object>  {
    return this.http.get(this.listUrl);
  }

  addList(list: List): Observable<object>  {
    list.pin = false;
    return this.http.post(this.listUrl, list);
  }

  deleteList(id: number): Observable<object>  {
    return this.http.delete(this.listUrl + '/' + id);
  }

  addTask(body): Observable<object>  {
    console.log(body);
    return this.http.post(this.taskUrl, body);
  }
  changePin(id, isPin): Observable<object>  {
    return this.http.patch(this.listUrl + '/' + id, {pin: isPin});
  }

  getUnDoneTask(): Observable<object>  {
    return this.http.get(this.taskUrl + '?isDone=false');
  }
}
