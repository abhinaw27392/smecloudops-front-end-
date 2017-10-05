import { NgModule }      from '@angular/core';
import { CISAUDITS } from './cisaudits.component';
import { routing }       from './cisaudits.routing';
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
    CISAUDITS
  ]
})
export class CisAuditsModule {}
