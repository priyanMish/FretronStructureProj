import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCart, deleteFromCart } from 'src/app/store/actions/store.action';

@Component({
  selector: 'app-dashboard-cards',
  templateUrl: './dashboard-cards.component.html',
  styleUrls: ['./dashboard-cards.component.scss']
})
export class DashboardCardsComponent implements OnInit {
 
  @Input() itemCard:any
constructor(private cartStore:Store<{cart:any}>){

}
ngOnInit(): void {
  
}

addToCart(item:any){
 this.cartStore.dispatch(addToCart({item}))

}
removeFromCart(item:any){
 this.cartStore.dispatch(deleteFromCart({item}))
}

}
