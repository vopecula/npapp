import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MachineUsageComponent} from './containers/machine-usage/machine-usage.component';
import {CustomerStatComponent} from './containers/customer-stat/customer-stat.component';
import {FilterComponent} from './components/filter/filter.component';
import {Route, RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {NgxChartsModule} from '@swimlane/ngx-charts';

const routes: Route[] = [
  {path: '', redirectTo: '/machine-usage', pathMatch: 'full'},
  {path: 'machine-usage', component: MachineUsageComponent},
  {path: 'customer-stat', component: CustomerStatComponent}
];

@NgModule({
  declarations: [MachineUsageComponent, CustomerStatComponent, FilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    NgxChartsModule
  ],
  exports: [RouterModule]
})
export class ReportModule {
}
