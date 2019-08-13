import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InicialBotoesPage } from './inicial-botoes';

@NgModule({
  declarations: [
    InicialBotoesPage,
  ],
  imports: [
    IonicPageModule.forChild(InicialBotoesPage),
  ],
})
export class InicialBotoesPageModule {}
