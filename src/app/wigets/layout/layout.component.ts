import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidemenuComponent } from '../../common/sidemenu/sidemenu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, SidemenuComponent, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  isExpanded = false;
  isMenuOpen = false;

  toggleMenu() {
  if (window.innerWidth <= 768) {
    this.isMenuOpen = !this.isMenuOpen;
  } else {
    this.isExpanded = !this.isExpanded; 
  }
}
}

