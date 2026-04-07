import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  apiUrl = 'https://common.stoccoz.com/api/v1/Driver?pageIndx=1&pageSize=11&orderBy=ASC&orderByName=full_name';
  constructor(private http: HttpClient) { }
  getDrivers() {

  const params = new HttpParams()
    .set('pageIndex', 1)
    .set('pageSize', 11)
    .set('orderBy', 'ASC')
    .set('orderByName', 'full_name');

  return this.http.get(this.apiUrl, { params });
}
}
