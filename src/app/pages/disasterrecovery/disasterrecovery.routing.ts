import { Routes, RouterModule }  from '@angular/router';

import { DisasterrecoveryComponent } from './disasterrecovery.component';
import { BackupscriptComponent } from './components/backupscript/backupscript.component';
import { SnapmissingComponent } from './components/snapmissing/snapmissing.component';
import { RdsbackupComponent } from './components/rdsbackup/rdsbackup.component';
import { RdsmultiazComponent } from './components/rdsmultiaz/rdsmultiaz.component';



// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: DisasterrecoveryComponent,
    children: [
      { path: 'backupscript', component: BackupscriptComponent },
      { path: 'snapmissing', component: SnapmissingComponent },
      { path: 'rdsbackup', component: RdsbackupComponent },
      { path: 'rdsmultiaz', component: RdsmultiazComponent }              
      
    ]
  }
];

export const routing = RouterModule.forChild(routes);
