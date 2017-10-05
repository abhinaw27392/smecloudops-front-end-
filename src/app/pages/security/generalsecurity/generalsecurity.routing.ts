import { Routes, RouterModule }  from '@angular/router';

import { GeneralSecurity } from './generalsecurity.component';
import { CLOUDTRAILSTATUS } from './components/cloudtrailstatus/cloudtrailstatus.component';
import { ELKACCOUNTS } from './components/elkaccounts/elkaccounts.component';
import { PUBLICAMI } from './components/publicami/publicami.component';
import { VPCFLOWLOG } from './components/vpcflowlog/vpcflowlog.component';



// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: GeneralSecurity,
    children: [
      { path: 'cloudtrailstatus', component: CLOUDTRAILSTATUS },
      { path: 'elkaccounts', component: ELKACCOUNTS },
      { path: 'publicami', component: PUBLICAMI },
      { path: 'vpcflowlog', component: VPCFLOWLOG }                 
      
    ]
  }
];

export const routing = RouterModule.forChild(routes);
