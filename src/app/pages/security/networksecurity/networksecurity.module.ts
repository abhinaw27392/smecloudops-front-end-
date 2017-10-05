import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';

import { routing }       from './networksecurity.routing';
import { NetworkSecurity } from './networksecurity.component';
import { OPENSECURITYGROUP } from './components/opensecuritygroup/opensecuritygroup.component';
import { S3OPENTOPUBLIC } from './components/s3opentopublic/s3opentopublic.component';
import { SSLCERTIFICATE } from './components/sslcertificate/sslcertificate.component';
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
    NetworkSecurity,
    OPENSECURITYGROUP,
    S3OPENTOPUBLIC,
    SSLCERTIFICATE
  ]
})
export class NetworkSecurityModule {
}
