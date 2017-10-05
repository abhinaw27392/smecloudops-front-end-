import { Routes, RouterModule }  from '@angular/router';

import { NetworkSecurity } from './networksecurity.component';
import { OPENSECURITYGROUP } from './components/opensecuritygroup/opensecuritygroup.component';
import { S3OPENTOPUBLIC } from './components/s3opentopublic/s3opentopublic.component';
import { SSLCERTIFICATE } from './components/sslcertificate/sslcertificate.component';



// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: NetworkSecurity,
    children: [
      { path: 'opensecuritygroup', component: OPENSECURITYGROUP },
      { path: 's3opentopublic', component: S3OPENTOPUBLIC },
      { path: 'sslcertificate', component: SSLCERTIFICATE }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
