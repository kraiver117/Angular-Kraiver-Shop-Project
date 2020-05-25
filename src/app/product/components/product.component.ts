import { Component,
     Input,
     Output,
     EventEmitter, OnChanges,
     SimpleChanges,
     OnInit,
     DoCheck,
     OnDestroy
    } from '@angular/core';

import { Product } from '../../product.model';

@Component ({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnChanges,OnInit, OnDestroy {

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today  = new Date();

  constructor() {
      console.log('1.Constructor');
  }

    ngOnChanges(changes: SimpleChanges){
        console.log('2.ngOnChanges');
        console.log(changes);
    }

    ngOnInit() {
        console.log('3.OnInit');
    }

    // ngDoCheck(){
    //     console.log('4.Do Check');
    // }

    ngOnDestroy() {
        console.log('5.On Destroy');
    }

  addCart() {
      console.log('Add to cart');
      this.productClicked.emit(this.product.id);
  }

}
