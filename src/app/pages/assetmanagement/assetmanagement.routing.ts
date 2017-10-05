import { Routes, RouterModule }  from '@angular/router';

import { AssetManagement } from './assetmanagement.component';
import { AMIAGING } from './components/amiaging/amiaging.component';
import { AMICLEANUP } from './components/amicleanup/amicleanup.component';
import { TAGSPROJECTCODE } from './components/tagsprojectcode/tagsprojectcode.component';
import { OLDEBSPERFORMANCE } from './components/oldebsperformance/oldebsperformance.component';
import { AMIDETAILS } from './components/amidetails/amidetails.component';
import { EC2WITHOUTRI } from './components/ec2withoutri/ec2withoutri.component';
import { AMIAUDIT } from './components/amiaudit/amiaudit.component';
import { TAGSOWNER } from './components/tagsowner/tagsowner.component';
import { TAGSBUSINESSUNIT } from './components/tagsbusinessunit/tagsbusinessunit.component';
import { UNTAGGEDRESOURCES } from './components/untaggedresources/untaggedresources.component';



// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: AssetManagement,
    children: [
      { path: 'amiaging', component: AMIAGING },
      { path: 'amicleanup', component: AMICLEANUP },
      { path: 'tagsprojectcode', component: TAGSPROJECTCODE },
      { path: 'oldebsperformance', component: OLDEBSPERFORMANCE },
      { path: 'amidetails', component: AMIDETAILS },
      { path: 'ec2withoutri', component: EC2WITHOUTRI },
      { path: 'amiaudit', component: AMIAUDIT },  
      { path: 'tagsowner', component: TAGSOWNER }, 
      { path: 'tagsbusinessunit', component: TAGSBUSINESSUNIT },
      { path: 'untaggedresources', component: UNTAGGEDRESOURCES }                 
      
    ]
  }
];

export const routing = RouterModule.forChild(routes);
