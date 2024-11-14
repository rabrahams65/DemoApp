import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { AuthGuard } from '../_guards/auth.guard';

const routes: Routes = [
  {path: '', component: GridComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class GridRoutingModule { }
