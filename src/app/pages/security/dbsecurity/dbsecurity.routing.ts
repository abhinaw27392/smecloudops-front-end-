import { Routes, RouterModule }  from '@angular/router';

import { DbSecurity } from './dbsecurity.component';
import { DBENCRYPTION } from './components/dbencryption/dbencryption.component';



// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: DbSecurity,
    children: [
      { path: 'dbencryption', component: DBENCRYPTION }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
