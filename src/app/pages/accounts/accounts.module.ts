import { NgModule }      from '@angular/core';
import { ACCOUNTS } from './accounts.component';
import { routing }       from './accounts.routing';
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
    ACCOUNTS
  ]
})
export class AccountsModule {}
