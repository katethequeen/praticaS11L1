import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page3RoutingModule } from './page3-routing.module';
import { Page3Component } from './page3.component';

@NgModule({
  declarations: [Page3Component],
  imports: [CommonModule, Page3RoutingModule, SharedModule],
})
export class Page3Module {}
