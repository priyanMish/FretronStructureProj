import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnChanges {

  cartCount:number = 0
  


constructor(private cartStore: Store<{cart:any}>){

}

cartObservale$ = this.cartStore.select('cart')

subscribedCount:any=this.cartObservale$.subscribe((data)=>{
  // this.cartCount = data.length
  this.cartCount = 0
    for(let d of data){
      this.cartCount+= d.quantity
    }
  console.log(data, "navbarData")
})

ngOnInit(): void {
  
}
ngOnChanges(changes: SimpleChanges): void {
  // this.subscribedCount=this.cartObservale$.subscribe((data)=>{
  //   this.cartCount = data.length
  // })
}

}
