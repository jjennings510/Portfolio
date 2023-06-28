import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isNavbarTransparent = true;

  @HostListener('window:scroll')
  onScroll(): void {
    let scrollHeight = 600;

    if (window.scrollY >= scrollHeight) {
      this.isNavbarTransparent = false;
    } else if (window.scrollY < scrollHeight) {
      this.isNavbarTransparent = true;
    }
  }
}
