import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';

import { routing }       from './infrastructuresecurity.routing';
import { InfrastructureSecurity } from './infrastructuresecurity.component';
import { ELBACCESSLOG } from './components/elbaccesslog/elbaccesslog.component';
import { ELBCIPHERVERSION } from './components/elbcipherversion/elbcipherversion.component';
import { UNUSEDKEY } from './components/unusedkey/unusedkey.component';
import { UNUSEDUSERS } from './components/unusedusers/unusedusers.component';
import { USERSWITHOUTMFA } from './components/userswithoutmfa/userswithoutmfa.component';
import { S3LOGGING } from './components/s3logging/s3logging.component';
import { TERMINATION } from './components/termination/termination.component';
import { UNUSEDSSHKEY } from './components/unusedsshkey/unusedsshkey.component';
import { USEDKMSKEYS } from './components/usedkmskeys/usedkmskeys.component';
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
    InfrastructureSecurity,
    ELBACCESSLOG,
    ELBCIPHERVERSION,
    UNUSEDKEY,
    UNUSEDUSERS,
    USERSWITHOUTMFA,
   S3LOGGING,
   TERMINATION,
   UNUSEDSSHKEY,
   USEDKMSKEYS

  ]
})
export class InfrastructureSecurityModule {
}
