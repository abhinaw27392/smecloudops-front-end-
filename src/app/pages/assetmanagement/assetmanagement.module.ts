import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing } from './assetmanagement.routing';
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
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    DataTablesModule
  ],
  declarations: [
    AssetManagement,
    AMIAGING,
    AMICLEANUP,
    TAGSPROJECTCODE,
    OLDEBSPERFORMANCE,
    AMIDETAILS,
    EC2WITHOUTRI,
    AMIAUDIT,
    TAGSOWNER,
    TAGSBUSINESSUNIT,
    UNTAGGEDRESOURCES
  ]
})
export class AssetManagementModule {
}
