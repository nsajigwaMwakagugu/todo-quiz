import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  todoList: Todo[];
  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  // implement support to remove todo item from the list and save data to server
  onDeleteTodo(todoItem: Todo) {
    // 1. remove todo from the list
    // 2. save the updated list to server
  }

  // implement support to add todo item into the list and save data to server
  onCreateTodo(todoItem: Todo) {
    // 1. add  todo from the list
    // 2. save the updated list to server
  }

  // implement support to edit todo item and update into the list and save data to server
  onEditTodo(todoItem: Todo) {
    // 1. update edited todo into the list
    // 2. save the updated list to server
  }

  // implement support to mark todo item as complete and update into the list and save data to server
  onCompleteTodo(todoItem: Todo) {
    // 1. mark a todo as complete
    // 2. update edited todo into the list
    // 3. save the updated list to server
  }
}
