import { Component } from '@angular/core';
import { Project } from '../_models/project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      name: 'GGs Store App',
      shortDescription: 'This application is designed with functionality that would make virtual shopping much simpler.',
      longDescription: 'This application is designed with functionality that would make virtual shopping much simpler! Customers can sign up for an account, place orders, view their order history, and specific location inventory. It also comes with an additional interface for managing your business. Managers can view and replenish location inventory, add new products, and view the order history of specific locations. This application used Entity Framework Core to connect to a PostgreSQL database, ASP.NET Core API to create a RESTful API, and HTML, CSS, BootstrapJS, and Javascript to create the front end.',
      technologies: 'ASP.NET Core, Entity Framework Core, ASP.NET MVC, Postgre SQL',
      sourceCodeLink: 'https://github.com/jjennings510/GGsStoreApp',
      images: [
        {
          title: 'App home',
          src: 'assets/images/GGs/inventory.png'
        },
        {
          title: 'Login',
          src: 'assets/images/GGs/login.png'
        },
        {
          title: 'App home',
          src: 'assets/images/GGs/inventory.png'
        }
      ]
    },
  ];
}
