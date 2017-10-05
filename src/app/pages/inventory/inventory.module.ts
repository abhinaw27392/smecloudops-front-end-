import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './inventory.routing';
import { Inventory } from './inventory.component';
import { EC2 } from './components/ec2/ec2.component';
import { AMI } from './components/ami/ami.component';
import { RDS } from './components/rds/rds.component';
import { S3 } from './components/s3/s3.component';
import { IAMUSER } from './components/iamuser/iamuser.component';
import { IAMGROUP } from './components/iamgroup/iamgroup.component';
import { ROUTETABLE } from './components/routetable/routetable.component';
import { ELB } from './components/elb/elb.component';
import { EBS } from './components/ebs/ebs.component';
import { SNAPSHOT } from './components/snapshot/snapshot.component';
import { VPC } from './components/vpc/vpc.component';
import { SECURITYGROUP } from './components/securitygroup/security.component';
import { SUBNET } from './components/subnet/subnet.component';
import { VPNCONNECTION } from './components/vpnconnection/vpnconnection.component';
import { VPCPEERING } from './components/vpcpeering/vpcpeering.component';
import { REDSHIFT } from './components/redshift/redshift.component';

// import { ResponsiveTable } from './components/ec2/responsiveTable/responsiveTable.component';
// import { Ng2SmartTableModule } from 'ng2-smart-table';
// import { DataTableModule } from "angular2-datatable";
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
    Inventory,
    EC2,
    RDS,
    AMI,
    S3,
    IAMUSER,
    IAMGROUP,
    ROUTETABLE,
    ELB,
    EBS,
    SNAPSHOT,
    VPC,
    SECURITYGROUP,
    SUBNET,
    VPNCONNECTION,
    VPCPEERING,
    REDSHIFT
    

  ]
})
export class Ec2Module {
}
