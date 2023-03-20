import { Component, OnInit , Input, AfterViewInit} from '@angular/core';
import { Store } from '@ngrx/store';
import {DataService} from '../../../data.service'
import { getData } from 'src/app/store/actions/store.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit , AfterViewInit {
     
  

  constructor(private dataService:DataService, private store:Store<{store:any}>){
   
  }
  storeData$= this.store.select('store')
  dataArr:any = []
  displayData:any = []

  subscribedData:any = this.storeData$.subscribe((data)=>{
    this.dataArr = data
    this.displayData = [...this.dataArr]
  })
  ngOnInit(): void {

    this.getDataFromServer()
    }
    ngAfterViewInit(): void {
    
    }
  onGetSearchValue(event:any){
     let value = event
     this.onSearch(value)
  }

  onSearch(value:any){
   this.displayData= this.dataArr.filter((item:any)=> item.title.includes(value))
  }

  getDataFromServer(){
    this.store.dispatch(getData())
  }
}
