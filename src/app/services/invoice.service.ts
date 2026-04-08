import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private invoiceApi = 'https://common.stoccoz.com/api/v1/SalesInvoice';
  private driverApi = 'https://common.stoccoz.com/api/v1/Driver';

  constructor(private http: HttpClient) {}
//switchmap, pipe
  getDriverFromInvoice(invoiceId: number) {
    return this.http.get<any>(`${this.invoiceApi}/${invoiceId}`)
      .pipe(
        switchMap((res: any) => {

          const driverId = res?.invoice?.driverID;

          if (!driverId) {
            throw new Error('Driver ID not found');
          }

          return this.http.get<any>(`${this.driverApi}/${driverId}`);
        })
      );
  }
  
}
