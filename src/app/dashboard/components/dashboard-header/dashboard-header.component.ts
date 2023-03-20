import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {
   
  @Output() searchValue = new EventEmitter<any>()

  searchInput = new BehaviorSubject<any>(null)
  


  constructor(){

  } 
  ngOnInit(): void {
    
  }

  onSearchChange(event:any){
       this.searchInput.next(event.target.value)
       this.searchInput.pipe(
        debounceTime(1500),
         distinctUntilChanged()   
       ).subscribe((value:any)=>{this.searchValue.emit(value)})
  }
}
