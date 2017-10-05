import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './accesscontrols.routing';
import { AccessControls } from './accesscontrols.component';
import { ACCESSKEYAGE } from './components/accesskeyage/accesskeyage.component';
import { ADMINUSER } from './components/adminuser/adminuser.component';
import { PASSWORDCHECK } from './components/passwordcheck/passwordcheck.component';
import { PASSWORDPOLICY } from './components/passwordpolicy/passwordpolicy.component';
import { ROOTACCOUNTKEY } from './components/rootaccountkey/rootaccountkey.component';
import { ROOTACCOUNTMFA } from './components/rootaccountmfa/rootaccountmfa.component';
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
    AccessControls,
    ACCESSKEYAGE,
    ADMINUSER,
    PASSWORDCHECK,
    PASSWORDPOLICY,
    ROOTACCOUNTKEY,
    ROOTACCOUNTMFA
  ]
})
export class AccessControlsModule {
}
