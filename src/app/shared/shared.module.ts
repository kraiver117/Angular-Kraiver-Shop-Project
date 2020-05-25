import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {ExponentialPipe} from './pipes/exponential/exponential.pipe';
import {HighlightDirective} from './directives/highlight/highlight.directive';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ExponentialPipe,
    HighlightDirective
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ExponentialPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
