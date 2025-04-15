import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
       /* @vite-ignore */
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

