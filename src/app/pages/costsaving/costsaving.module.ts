import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './costsaving.routing';
import { CostSaving } from './costsaving.component';
import { UNUSEDEBS } from './components/unusedebs/unusedebs.component';
import { UNUSEDELASTICIPS } from './components/unusedelasticips/unusedelasticips.component';
import { UNUSEDSNAPSHOT } from './components/unusedsnapshot/unusedsnapshot.component';
import { UNUSEDELB } from './components/unusedelb/unusedelb.component';
import { UNUSEDEC2 } from './components/unusedec2/unusedec2.component';
import { UNUSEDSECURITY } from './components/unusedsecurity/unusedsecurity.component';
import { TOTALCOST } from './components/totalcost/totalcost.component';
import { DataTablesModule } from 'angular-datatables';
import { AlertModule } from 'ngx-bootstrap';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    ChartsModule,
    DataTablesModule,
    AlertModule.forRoot()
  ],
  declarations: [
    CostSaving,
    UNUSEDEBS,
    UNUSEDELASTICIPS,
    UNUSEDSNAPSHOT,
    UNUSEDELB,
    UNUSEDEC2,
    UNUSEDSECURITY,
    TOTALCOST

  ]
})
export class CostsavingModule {
}
