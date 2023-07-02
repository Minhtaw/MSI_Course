import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { startWith } from 'rxjs';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: StartComponent
  },

  {
    path: 'start',
    component: StartComponent
  },

  {
    path: 'detail',
    component: DetailComponent
  },

  {
    path: 'detail/:id',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
