import { NgModule }      from '@angular/core';
import { ScheduledeventsComponent } from './scheduledevents.component';
import { routing }       from './scheduledevents.routing';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    routing,
    CommonModule,
    FormsModule,
    NgaModule,
    DataTablesModule
  ],
  declarations: [
    ScheduledeventsComponent
  ]
})
export class ScheduledModule {}
