import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { Todo } from '../models/todo.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private httpClient: NgxDhis2HttpClientService) {}

  // Implement support to fetch todo list from server
  getTodos(): Observable<Todo[]> {
    return of([]);
  }

  // implement support to save todo list
  saveTodos(todoList: Todo[]) {}
}
