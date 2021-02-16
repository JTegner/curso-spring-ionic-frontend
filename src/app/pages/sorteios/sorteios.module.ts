import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SorteiosPageRoutingModule } from './sorteios-routing.module';

import { SorteiosPage } from './sorteios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SorteiosPageRoutingModule
  ],
  declarations: [SorteiosPage]
})
export class SorteiosPageModule {}
