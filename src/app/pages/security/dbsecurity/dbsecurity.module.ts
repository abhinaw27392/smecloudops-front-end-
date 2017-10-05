import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';

import { routing }       from './dbsecurity.routing';
import { DbSecurity } from './dbsecurity.component';
import { DBENCRYPTION } from './components/dbencryption/dbencryption.component';
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
    DbSecurity,
    DBENCRYPTION
  ]
})
export class DBSecurityModule {
}
