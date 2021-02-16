import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SorteiosPage } from './sorteios.page';

const routes: Routes = [
  {
    path: '',
    component: SorteiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SorteiosPageRoutingModule {}
