import { Routes, RouterModule }  from '@angular/router';

import { CISAUDITS } from './cisaudits.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: CISAUDITS
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
