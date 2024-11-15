import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionRoutingModule } from './accordion-routing.module';
import { DxAccordionModule } from 'devextreme-angular';



@NgModule({
  declarations: [
    AccordionComponent
  ],
  imports: [
    CommonModule,
    AccordionRoutingModule,
    DxAccordionModule
  ]
})
export class AccordionModule { }
