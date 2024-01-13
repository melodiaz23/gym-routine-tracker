import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isSmall: boolean = false;

  constructor() {}

  @HostListener('window:resize')
  onResize(event: Event) {
    this.isSmall = window.innerWidth < 768 ? true : false;
  }

  onDisplayMenu() {
    if (window.innerWidth < 768) {
      console.log('CLICK');
    }
  }
}
