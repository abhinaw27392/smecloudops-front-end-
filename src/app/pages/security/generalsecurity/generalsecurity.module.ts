import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';

import { routing }       from './generalsecurity.routing';
import { GeneralSecurity } from './generalsecurity.component';
import { CLOUDTRAILSTATUS } from './components/cloudtrailstatus/cloudtrailstatus.component';
import { ELKACCOUNTS } from './components/elkaccounts/elkaccounts.component';
import { PUBLICAMI } from './components/publicami/publicami.component';
import { VPCFLOWLOG } from './components/vpcflowlog/vpcflowlog.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    DataTablesModule
  ],
  declarations: [
    GeneralSecurity,
    CLOUDTRAILSTATUS,
    ELKACCOUNTS,
    PUBLICAMI,
    VPCFLOWLOG

  ]
})
export class GeneralSecurityModule {
}
