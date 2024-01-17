import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtrosVarios } from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos:Todo[] = []
  filtroActual!: filtrosVarios;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('todos').subscribe(
    //   todos => this.todos = todos
    // )

    this.store.subscribe( ({todos,filtro}) => {
      this.todos = todos;
      this.filtroActual = filtro
    })
  }

}
