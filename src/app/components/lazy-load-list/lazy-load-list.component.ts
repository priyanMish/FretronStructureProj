import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit ,ViewChild} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription ,fromEvent,debounceTime,map} from 'rxjs';
import { getLazyList } from 'src/app/store/actions/store.action';


@Component({
  selector: 'app-lazy-load-list',
  templateUrl: './lazy-load-list.component.html',
  styleUrls: ['./lazy-load-list.component.scss']
})
export class LazyLoadListComponent implements OnInit, AfterViewInit, OnDestroy{
    lazyData:Array<any>=[]
    asyncData:Array<any>=[]
    storeData = this.store.select('lazyList')
    offset:number = 0
    listCount:number = 20
    subscription$:Subscription = new Subscription()
    @ViewChild('container')  container:ElementRef | any

    subscribedData$ = this.storeData.subscribe((data)=>{
      this.asyncData = data
      
      this.lazyData = this.asyncData.slice(this.offset,20)
      console.log(this.lazyData.length, "length")
    })


  constructor(private store:Store<{lazyList:any}>){
    
  }

  ngOnInit(): void {

    this.store.dispatch(getLazyList())
  }

  ngAfterViewInit() {
    this.subscription$ = fromEvent(this.container.nativeElement, "scroll").pipe(
        debounceTime(200),
        map((event: any) => event.target)
      ).subscribe((target: any) => {
        let per = Math.floor((target.scrollTop / target.scrollHeight) * 100);
        console.log(per,"per")
        if (per > 15) {
        //  this.offset = this.lazyData.length/20
        //  console.log(this.offset)
        //  this.lazyData = [...this.lazyData,...this.asyncData.slice(this.offset+20,(this.lazyData.length-1 + 20))]
         this.lazyData = [...this.lazyData,...this.asyncData.slice(this.lazyData.length-1,(this.lazyData.length-1 + 20))]
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe()
  }

 
}
