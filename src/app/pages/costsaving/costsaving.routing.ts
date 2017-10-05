import { Routes, RouterModule }  from '@angular/router';

import { CostSaving } from './costsaving.component';
import { UNUSEDEBS } from './components/unusedebs/unusedebs.component';
import { UNUSEDELASTICIPS } from './components/unusedelasticips/unusedelasticips.component';
import { UNUSEDSNAPSHOT } from './components/unusedsnapshot/unusedsnapshot.component';
import { UNUSEDELB } from './components/unusedelb/unusedelb.component';
import { UNUSEDEC2 } from './components/unusedec2/unusedec2.component';
import { UNUSEDSECURITY } from './components/unusedsecurity/unusedsecurity.component';
import { TOTALCOST } from './components/totalcost/totalcost.component';



// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: CostSaving,
    children: [
      { path: 'unusedebs', component: UNUSEDEBS },
      { path: 'unusedelasticips', component: UNUSEDELASTICIPS },
      { path: 'unusedsnapshot', component: UNUSEDSNAPSHOT },
      { path: 'unusedelb', component: UNUSEDELB },
      { path: 'unusedec2', component: UNUSEDEC2 },
      { path: 'unusedsecurity', component: UNUSEDSECURITY },
      { path: 'totalcost', component: TOTALCOST }                 
      
    ]
  }
];

export const routing = RouterModule.forChild(routes);
