import { AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output ,Input, ViewChild} from '@angular/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged ,exhaustMap,fromEvent,switchMap, map, Subscription} from 'rxjs';
import { __asyncValues } from 'tslib';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit , OnDestroy, AfterViewInit{
   
  @Output() searchValue = new EventEmitter<any>()
  @ViewChild('searchField') searchField: ElementRef | any;
  subscription$:Subscription = new Subscription()

  constructor(){

  } 
  ngOnInit(): void {
    // let value=''
    // this.onSearchChange(value)
    // this.searchInput.pipe(
    //   debounceTime(1500),
    //    distinctUntilChanged(),
         
    //  ).subscribe((value:any)=>{
    //   this.searchValue.emit(value)
    // })
    
  }

  ngAfterViewInit(): void {
    try{
      this.subscription$.add(
      fromEvent(this.searchField.nativeElement,'keyup').pipe(
        map((e: any) => e.target.value),
        debounceTime(1500),
        distinctUntilChanged()
      ).subscribe(
          ((event)=>{
            console.log(event, "searchFromEvent")
            this.searchValue.emit(event)
          })
      ))
    } catch (error) {
      console.log(error)
    }
    
  }

  ngOnDestroy(): void {
    // this.searchInput.unsubscribe()
    this.subscription$.unsubscribe()

  }

  onSearchChange(event:any){
      //  if(event ==''){
      //   this.searchInput.next('')
      //  } else{
      //   this.searchInput.next(event?.target?.value)
      //  }   
  }
}
