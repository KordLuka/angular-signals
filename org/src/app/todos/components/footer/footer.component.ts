import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todo.service';
import { FilterEnum } from '../../types/filter.enum';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  private readonly todosService = inject(TodoService);
  public readonly FilterEnum: typeof FilterEnum = FilterEnum;
  public filter = this.todosService.filter;
  public activeCount = computed(() => {
    return this.todosService.todos().filter((todo) => !todo.isCompleted).length;
  });

  public changeFilter(activeFilter: FilterEnum): void {
    this.todosService.changeFilter(activeFilter);
  }
}
