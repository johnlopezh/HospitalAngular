import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasUnoComponent } from './graficas-uno/graficas-uno.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent},
            { path: 'progress', component: ProgressComponent},
            { path: 'graficas-uno', component: GraficasUnoComponent},
            { path: 'account-settings', component: AccountSettingComponent},
            { path: '', pathMatch: 'full', redirectTo: 'dashboard'}
        ]
    },
];
export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes) ;
