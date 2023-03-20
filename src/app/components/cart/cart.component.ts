import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartData:any;
  cartData$:any = this.store.select('cart').subscribe((data)=>{
    this.cartData = data;
  })

  constructor(private store:Store<{cart:any}>){

  }

  ngOnInit(): void {
    
  }
}
