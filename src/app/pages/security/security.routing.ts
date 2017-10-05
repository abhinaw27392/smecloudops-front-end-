import { Routes, RouterModule }  from '@angular/router';

import { Security } from './security.component';
import { GeneralSecurity } from './generalsecurity/generalsecurity.component';



// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Security,
    children: [
      { path: 'generalsecurity', loadChildren: './generalsecurity/generalsecurity.module#GeneralSecurityModule' },
      { path: 'infrastructuresecurity', loadChildren: './infrastructuresecurity/infrastructuresecurity.module#InfrastructureSecurityModule' },
		{ path: 'networksecurity', loadChildren: './networksecurity/networksecurity.module#NetworkSecurityModule' },
    { path: 'dbsecurity', loadChildren: './dbsecurity/dbsecurity.module#DBSecurityModule' }
      
    ]
  }
];

export const routing = RouterModule.forChild(routes);
