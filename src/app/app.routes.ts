import { Routes } from '@angular/router';
import { LoginComponent } from './wigets/login/login.component';
import { DashboardComponent } from './wigets/dashboard/dashboard.component';
import { LayoutComponent } from './wigets/layout/layout.component';
import { InvoiceComponent } from './wigets/invoice/invoice.component';
import { DriversComponent } from './wigets/drivers/drivers.component';

export const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  {
    path: '',component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'invoices', component: InvoiceComponent },
      { path: 'drivers', component: DriversComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'login' }

];
