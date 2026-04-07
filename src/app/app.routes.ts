import { Routes } from '@angular/router';
import { LoginComponent } from './wigets/login/login.component';
import { DashboardComponent } from './wigets/dashboard/dashboard.component';
import { LayoutComponent } from './wigets/layout/layout.component';

export const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'login' }

];
