import { NgModule } from '@angular/core';
import { ContatoFormComponent } from './contato-form/contato-form';
import { MyApp } from '../app/app.component';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [ContatoFormComponent],
	imports: [
		IonicModule.forRoot(MyApp),

	],
	exports: [ContatoFormComponent]
})
export class ComponentsModule {}
