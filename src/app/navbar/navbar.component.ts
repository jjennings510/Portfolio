import { Component, HostListener, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit{
  isNavbarTransparent = true;
  activeSection: string = '';
  showMenu = false;
  navbarHeightThreshold = 600;
  menuBars: any;

  ngOnInit(): void {
    this.menuBars = faBars;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    
    if (window.scrollY >= this.navbarHeightThreshold) {
      this.isNavbarTransparent = false;
    } else if (window.scrollY < this.navbarHeightThreshold) {
      this.isNavbarTransparent = true;
    }
    this.highlightActiveLink();
    if (this.showMenu) {
      this.isNavbarTransparent = false;
    }
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

  toggleMenu() {
    this.showMenu = !this.showMenu;
    console.log(this.showMenu)
    if (this.showMenu) {
      this.isNavbarTransparent = false;
    }
    if (!this.showMenu && window.scrollY < this.navbarHeightThreshold) {
      this.isNavbarTransparent = true;
    }
  }
}
