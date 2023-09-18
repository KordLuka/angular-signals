import { Injectable, signal } from '@angular/core';
import { TodoInterface } from '../types/todo.interface';
import { v4 as uuidv4 } from 'uuid';
import { FilterEnum } from '../types/filter.enum';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public todos = signal<TodoInterface[]>([]);
  public filter = signal<FilterEnum>(FilterEnum.all);

  public addTodo(text: string): void {
    const newTodo: TodoInterface = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    this.todos.update((todos) => [...todos, newTodo]);
  }

  public changeFilter(filter: FilterEnum): void {
    this.filter.set(filter);
  }
}
