import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasUnoComponent } from './graficas-uno/graficas-uno.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.router';

@NgModule({
declarations: [
    DashboardComponent,
    ProgressComponent,
    GraficasUnoComponent,
    PagesComponent
],
exports: [
    DashboardComponent,
    ProgressComponent,
    GraficasUnoComponent,
    PagesComponent
    ],
imports: [
    SharedModule,
    PAGES_ROUTES
]
})
export class PagesModule {}
