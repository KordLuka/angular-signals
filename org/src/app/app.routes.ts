import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todos',
  },
  {
    path: 'todos',
    title: 'todos',
    loadComponent: () =>
      import('./todos/todos.component').then((mod) => mod.TodosComponent),
  },
];
