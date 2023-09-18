import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TodoService } from '../../services/todo.service';

interface HeaderForm {
  text: FormControl<string | null>;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private readonly fb = inject(FormBuilder);
  private readonly todosService = inject(TodoService);

  public form = this.fb.group<HeaderForm>({
    text: this.fb.control('', [Validators.required]),
  });

  public addTodo(): void {
    if (this.form.invalid) return;

    const { text } = this.form.getRawValue();

    if (!text) return;

    this.todosService.addTodo(text);
    this.form.reset();
  }
}
