import { Routes, RouterModule }  from '@angular/router';

import { ScheduledeventsComponent } from './scheduledevents.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ScheduledeventsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
