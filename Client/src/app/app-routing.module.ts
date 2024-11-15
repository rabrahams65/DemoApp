import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'accordion', loadChildren: () => import('./accordion/accordion.module').then(m => m.AccordionModule), canActivate: [AuthGuard]},
  {path: 'grid', loadChildren: () => import('./grid/grid.module').then(m => m.GridModule), canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
