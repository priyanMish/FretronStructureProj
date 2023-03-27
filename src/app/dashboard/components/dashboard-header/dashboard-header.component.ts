import { AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output ,Input, ViewChild} from '@angular/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged ,exhaustMap,fromEvent,switchMap, map} from 'rxjs';
import { __asyncValues } from 'tslib';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit , OnDestroy, AfterViewInit{
   
  @Output() searchValue = new EventEmitter<any>()

  searchInput = new BehaviorSubject<any>(null)
  @ViewChild('searchField') searchField: ElementRef | any;


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
      fromEvent(this.searchField.nativeElement,'keyup').pipe(
        map((e: any) => e.target.value),
        debounceTime(1500),
        distinctUntilChanged()
      ).subscribe(
          ((event)=>{
            console.log(event, "searchFromEvent")
            this.searchValue.emit(event)
          })
      )
    } catch (error) {
      console.log(error)
    }
    
  }

  ngOnDestroy(): void {
    // this.searchInput.unsubscribe()
  }

  onSearchChange(event:any){
      //  if(event ==''){
      //   this.searchInput.next('')
      //  } else{
      //   this.searchInput.next(event?.target?.value)
      //  }   
  }
}
