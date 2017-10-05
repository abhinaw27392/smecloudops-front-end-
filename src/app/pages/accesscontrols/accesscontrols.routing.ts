import { Routes, RouterModule }  from '@angular/router';

import { AccessControls } from './accesscontrols.component';

import { ACCESSKEYAGE } from './components/accesskeyage/accesskeyage.component';
import { ADMINUSER } from './components/adminuser/adminuser.component';
import { PASSWORDCHECK } from './components/passwordcheck/passwordcheck.component';
import { PASSWORDPOLICY } from './components/passwordpolicy/passwordpolicy.component';
import { ROOTACCOUNTKEY } from './components/rootaccountkey/rootaccountkey.component';
import { ROOTACCOUNTMFA } from './components/rootaccountmfa/rootaccountmfa.component';



// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: AccessControls,
    children: [
      { path: 'accesskeyage', component: ACCESSKEYAGE },
      { path: 'adminuser', component: ADMINUSER },
      { path: 'passwordcheck', component: PASSWORDCHECK },
      { path: 'passwordpolicy', component: PASSWORDPOLICY },
      { path: 'rootaccountkey', component: ROOTACCOUNTKEY },
      { path: 'rootaccountmfa', component: ROOTACCOUNTMFA }                 
      
    ]
  }
];

export const routing = RouterModule.forChild(routes);
