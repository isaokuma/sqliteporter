import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CodeReaderPage } from './code-reader';

@NgModule({
  declarations: [
    CodeReaderPage,
  ],
  imports: [
    IonicPageModule.forChild(CodeReaderPage),
  ],
})
export class CodeReaderPageModule {}
