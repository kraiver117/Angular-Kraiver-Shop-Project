import { Component } from '@angular/core';
import {Product} from './product.model'
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
