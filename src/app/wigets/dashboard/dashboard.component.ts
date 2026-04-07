import { Component, OnInit } from '@angular/core';
import { DriverService } from '../../services/driver.service';
import { Observable } from 'rxjs/internal/Observable';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  constructor(private driverService: DriverService) { }
  drivers: any[] = [];
  ngOnInit() {
    this.driverService.getDrivers().subscribe({
      next: (res: any) => {
        this.drivers = res;
        console.log('Druivers: ', res);
    },
      error: (err) => {
        console.error('Error fetching drivers:', err);
      } 
    });
  }
}
