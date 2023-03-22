import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { forkJoin } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit , OnChanges{


  salary:any
  name:any
  data:any
  cartData:any;
  cartData$:any = this.store.select('cart').subscribe((data)=>{
    this.cartData = data;
  })

  constructor(private store:Store<{cart:any}>, private dataService:DataService){

  }

  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

 

  onGetSalary(){
  this.salary = this.dataService.onGetSalary()
   

  forkJoin([this.salary,this.name]).subscribe((resp)=>{
    console.log(resp,"race Condition")
    this.data = resp
  })
  }
  onGetName(){
    this.name=this.dataService.onGetName()
  }
}
