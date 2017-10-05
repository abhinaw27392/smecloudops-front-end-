import { Routes, RouterModule }  from '@angular/router';

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



// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: InfrastructureSecurity,
    children: [
      { path: 'elbaccesslog', component: ELBACCESSLOG },
      { path: 'elbaccesslog', component: ELBACCESSLOG },
      { path: 'elbcipherversion', component: ELBCIPHERVERSION },
      { path: 'unusedkey', component: UNUSEDKEY },
      { path: 'unusedusers', component: UNUSEDUSERS },
      { path: 'userswithoutmfa', component: USERSWITHOUTMFA },
      { path: 's3logging', component: S3LOGGING },
      { path: 'termination', component: TERMINATION }, 
      { path: 'unusedsshkey', component: UNUSEDSSHKEY },
      { path: 'usedkmskeys', component: USEDKMSKEYS }                 
      
    ]
  }
];

export const routing = RouterModule.forChild(routes);
