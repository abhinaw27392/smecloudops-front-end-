import { Routes, RouterModule }  from '@angular/router';

import { AGENTREPORTS } from './agentreports.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: AGENTREPORTS
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
