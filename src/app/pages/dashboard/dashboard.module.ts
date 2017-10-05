import { NgModule }      from '@angular/core';



import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';

@NgModule({
  imports: [
    routing
  ],
  declarations: [
    Dashboard
  ]
})
export class DashboardModule {}
