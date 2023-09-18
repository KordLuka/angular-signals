import { Component, WritableSignal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todo.service';
import { TodoInterface } from '../../types/todo.interface';
import { FilterEnum } from '../../types/filter.enum';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
})
export class MainComponent {
  private readonly todosService = inject(TodoService);

  public todos: WritableSignal<TodoInterface[]> = this.todosService.todos;

  public visibleTodos = computed(() => {
    const todos = this.todos();
    const filter = this.todosService.filter();

    if (filter === FilterEnum.active) {
      return todos.filter((todo) => !todo.isCompleted);
    } else if (filter === FilterEnum.completed) {
      return todos.filter((todo) => todo.isCompleted);
    } else {
      return todos;
    }
  });
}
