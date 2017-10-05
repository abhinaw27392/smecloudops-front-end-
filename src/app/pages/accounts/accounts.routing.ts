import { Routes, RouterModule }  from '@angular/router';

import { ACCOUNTS } from './accounts.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ACCOUNTS
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
