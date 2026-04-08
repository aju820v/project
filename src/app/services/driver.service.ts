import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  apiUrl = 'https://common.stoccoz.com/api/v1/Driver';

  constructor(private http: HttpClient) { }
//pagination is to be implemented, for that we use query parameters pageIndex and pageSize, 

  getDrivers(pageIndex: number, pageSize: number) {

  const params = new HttpParams()
    .set('pageIndex', pageIndex) 
    .set('pageSize', pageSize)
    .set('orderBy', 'ASC')
    .set('orderByName', 'full_name');

  return this.http.get<any[]>(this.apiUrl, { params });
}
}
