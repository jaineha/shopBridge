import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
        })
  };
  
  constructor(private http: HttpClient) { }

  private inventoryData = new BehaviorSubject([]);
  allInventoryData = this.inventoryData.asObservable();

  data(flag) {
    this.inventoryData.next(flag);
  }

  public tableData(): Observable<any> {
    return this.http.get("../../assets/mockData/tableData.json");
  }
}
