import { Component, OnInit } from '@angular/core';
import { DriverService } from '../../services/driver.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drivers',
  imports: [CommonModule],
  templateUrl: './drivers.component.html',
  styleUrl: './drivers.component.css'
})
export class DriversComponent  implements OnInit{


  constructor(private driverService: DriverService, 
              private router: Router
  ) { }
    drivers: any[] = [];
  pageIndex = 1;
  pageSize = 5;
  totalCount = 0;
  totalPages = 0;
  ngOnInit() {
  this.loadDrivers();

  }
  loadDrivers() {
  this.driverService.getDrivers(this.pageIndex, this.pageSize)
    .subscribe((res: any[]) => {

      this.drivers = res;
      if (res.length > 0) {
        this.totalCount = res[0].totalRecords;
      } else {
        this.totalCount = 0;
      }

      this.totalPages = Math.ceil(this.totalCount / this.pageSize);
    });
  }
  nextPage() {
    if(this.pageIndex < this.totalPages){
      this.pageIndex++;
      this.loadDrivers();
    }
  }
  prevPage() {
    if(this.pageIndex > 1){
      this.pageIndex--;
      this.loadDrivers();
    }
  }
  viewDriver(driver: any) {
  
  }
  
}

