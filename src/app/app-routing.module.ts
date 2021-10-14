import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridTreeComponent } from './view/grid-tree/grid-tree.component';

const routes: Routes = [
  { path: 'gridtree', component: GridTreeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
