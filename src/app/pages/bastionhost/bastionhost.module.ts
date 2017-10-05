import { NgModule }      from '@angular/core';
import { BASTIONHOST } from './bastionhost.component';
import { routing }       from './bastionhost.routing';
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
    BASTIONHOST
  ]
})
export class BastionHostModule {}
