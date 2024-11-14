import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { GridRoutingModule } from './grid-routing.module';
import { DxDataGridModule } from 'devextreme-angular';



@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    CommonModule,
    GridRoutingModule,
    DxDataGridModule
  ]
})
export class GridModule { }
