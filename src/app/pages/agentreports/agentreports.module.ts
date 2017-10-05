import { NgModule }      from '@angular/core';
import { AGENTREPORTS } from './agentreports.component';
import { routing }       from './agentreports.routing';
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
    AGENTREPORTS
  ]
})
export class AgentReportsModule {}
