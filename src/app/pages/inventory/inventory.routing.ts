import { Routes, RouterModule }  from '@angular/router';

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

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Inventory,
    children: [
      { path: 'ec2', component: EC2 },
      { path: 'ami', component: AMI },
      { path: 'rds', component: RDS },
      { path: 's3', component: S3 },
      { path: 'iamuser', component: IAMUSER },
      { path: 'iamgroup', component: IAMGROUP },
      { path: 'routetable', component: ROUTETABLE },
      { path: 'elb', component: ELB },
      { path: 'ebs', component: EBS },
      { path: 'snapshot', component: SNAPSHOT },
      { path: 'vpc', component: VPC },
      { path: 'securitygroup', component: SECURITYGROUP },
      { path: 'subnet', component: SUBNET },
      { path: 'vpnconnection', component: VPNCONNECTION },
      { path: 'vpcpeering', component: VPCPEERING },
      { path: 'redshift', component: REDSHIFT }
      // { path: 'table', component: ResponsiveTable },
      
    ]
  }
];

export const routing = RouterModule.forChild(routes);
