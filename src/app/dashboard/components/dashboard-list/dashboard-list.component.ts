import { Component, OnInit ,Input, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent  implements OnInit, AfterViewInit{

@Input() itemList:any;
  constructor(){

  }
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    
  }
}
