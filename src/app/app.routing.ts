import { Pages } from './pages/pages.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';



export const routes: Routes = [

   { path: 'dashboard1', redirectTo: 'pages' }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
1