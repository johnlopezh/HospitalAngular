import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasUnoComponent } from './graficas-uno/graficas-uno.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { PAGES_ROUTES } from './pages.router';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

@NgModule({
declarations: [
    DashboardComponent,
    ProgressComponent,
    GraficasUnoComponent,
    PagesComponent,
    IncrementadorComponent,
    GraficoDonaComponent
],
exports: [
    DashboardComponent,
    ProgressComponent,
    GraficasUnoComponent,
    PagesComponent
    ],
imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
]
})
export class PagesModule {}
