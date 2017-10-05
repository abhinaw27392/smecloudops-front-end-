import { Routes, RouterModule }  from '@angular/router';

import { PerformanceComponent } from './performance.component';

import { Ec2ebsoptimiseComponent } from './components/ec2ebsoptimise/ec2ebsoptimise.component';
import { S3limitexceedComponent } from './components/s3limitexceed/s3limitexceed.component';



// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: PerformanceComponent,
    children: [
      { path: 'ec2ebsoptimise', component: Ec2ebsoptimiseComponent },
      { path: 's3limitexceed', component: S3limitexceedComponent }              
      
    ]
  }
];

export const routing = RouterModule.forChild(routes);
