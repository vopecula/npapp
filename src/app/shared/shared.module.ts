import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import * as fromComponents from './components';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [CommonModule, RouterModule],
  exports: [...fromComponents.components]
})
export class SharedModule {
}
