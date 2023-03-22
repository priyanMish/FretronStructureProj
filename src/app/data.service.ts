import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  onGetData():Observable<any>{
    return this.http.get('../assets/data/data.json')
  }

  onGetJsonData():Observable<any>{
    return this.http.get('../assets/data/dropdown.json')
  }

  onGetSalary():Observable<any>{
    return this.http.get('../assets/data/salary.json')
  }
  onGetName():Observable<any>{
    return this.http.get('../assets/data/name.json')
  }

}
