import { Routes, RouterModule }  from '@angular/router';

import { BASTIONHOST } from './bastionhost.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: BASTIONHOST
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
