
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { routing } from './disasterrecovery.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DisasterrecoveryComponent} from './disasterrecovery.component';
import { BackupscriptComponent } from './components/backupscript/backupscript.component';
import { SnapmissingComponent } from './components/snapmissing/snapmissing.component';
import { RdsbackupComponent } from './components/rdsbackup/rdsbackup.component';
import { RdsmultiazComponent } from './components/rdsmultiaz/rdsmultiaz.component';

import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    DataTablesModule
  ],
  declarations: [DisasterrecoveryComponent, BackupscriptComponent, SnapmissingComponent, RdsbackupComponent, RdsmultiazComponent]
})
export class DisasterrecoveryModule { }
