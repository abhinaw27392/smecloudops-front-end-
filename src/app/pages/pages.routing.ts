import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  // {
  //   path: 'login',
  //   loadChildren: 'app/pages/login/login.module#LoginModule'
  // },
  // {
  //   path: 'register',
  //   loadChildren: 'app/pages/register/register.module#RegisterModule'
  // },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'inventory', loadChildren: './inventory/inventory.module#Ec2Module' },
      { path: 'costsaving', loadChildren: './costsaving/costsaving.module#CostsavingModule' },
      { path: 'assetmanagement', loadChildren: './assetmanagement/assetmanagement.module#AssetManagementModule' },
      { path: 'accesscontrols', loadChildren: './accesscontrols/accesscontrols.module#AccessControlsModule' },
      { path: 'security', loadChildren: './security/security.module#SecurityModule' },
      // { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      // { path: 'ui', loadChildren: './ui/ui.module#UiModule' },
      // { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
      // { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
      { path: 'agentreports', loadChildren: './agentreports/agentreports.module#AgentReportsModule' },
      { path: 'accounts', loadChildren: './accounts/accounts.module#AccountsModule' },
      { path: 'bastionhost', loadChildren: './bastionhost/bastionhost.module#BastionHostModule' },
       { path: 'cisaudits', loadChildren: './cisaudits/cisaudits.module#CisAuditsModule' },
       { path: 'scheduledevents', loadChildren: './scheduledevents/scheduledevents.module#ScheduledModule' },
       { path: 'performance', loadChildren: './performance/performance.module#PerformanceModule' },
       { path: 'disasterrecovery', loadChildren: './disasterrecovery/disasterrecovery.module#DisasterrecoveryModule' }
      // { path: 'maps', loadChildren: './maps/maps.module#MapsModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
