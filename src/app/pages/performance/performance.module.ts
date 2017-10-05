
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { routing } from './performance.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{PerformanceComponent} from './performance.component';
import { Ec2ebsoptimiseComponent } from './components/ec2ebsoptimise/ec2ebsoptimise.component';
import { S3limitexceedComponent } from './components/s3limitexceed/s3limitexceed.component';

import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    NgaModule,
    DataTablesModule
  ],
  declarations: [PerformanceComponent, Ec2ebsoptimiseComponent, S3limitexceedComponent]
})
export class PerformanceModule { }
