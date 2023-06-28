import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isNavbarTransparent = true;
  activeSection: string = '';

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    let navbarHeightThreshold = 600;
    if (window.scrollY >= navbarHeightThreshold) {
      this.isNavbarTransparent = false;
    } else if (window.scrollY < navbarHeightThreshold) {
      this.isNavbarTransparent = true;
    }

    this.highlightActiveLink();
  }

  highlightActiveLink() {
    const sections = [
      document.getElementById('home'),
      document.getElementById('about'),
      document.getElementById('skills'),
      document.getElementById('experience'),
      document.getElementById('portfolio'),
      document.getElementById('contact'),
    ];

    const offset = 100;

    const scrollPosition = window.scrollY;

    let activeSection = "";

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      if (section) {
        if (scrollPosition >= section?.offsetTop - offset) {
          activeSection = section.id;
        }
      }
    }

    this.activeSection = activeSection;
    console.log(scrollPosition)
    console.log(activeSection);
  }
}
