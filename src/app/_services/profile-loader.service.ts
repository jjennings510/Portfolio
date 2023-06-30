import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileLoaderService {
  constructor() {}

  private about: any = {
    bio: 'Demonstrated ability to lead teams, drive successful project outcomes, and effectively communicate with stakeholders. Seeking to enhance software development skills and contribute to innovative projects.',
    details: [
      'Software Engineer with over 2 years of experience',
      'Experience working with .NET framework, Angular, and UiPath',
      'Worked in all phases within the Software Development Life Cycle',
      'Strong understanding of Object-Oriented Programming, Data Structures, and Algorithms',
    ],
    email: 'jacobjennings510@gmail.com',
    address: 'Hayward, CA',
    dateOfBirth: 'May 19, 1997',
    degree: 'B.S. Computer Engineering'
  };
  
  private skills: any = {
    languages: [
      { name: 'Java', percent: 70 },
      { name: 'C#', percent: 80 },
      { name: 'JavaScript/TypeScript', percent: 60 },
      { name: 'Python', percent: 50 },
      { name: 'SQL', percent: 75 },
    ],
    frameworks: [
      { name: 'Spring', percent: 80 },
      { name: 'Hibernate', percent: 70 },
      { name: 'ASP.NET Web API', percent: 80 },
      { name: 'Entity Framework Core', percent: 70 },
      { name: 'Angular', percent: 65 },
    ],
    tools: [
      { name: 'MySQL', percent: 75 },
      { name: 'PostgreSQL', percent: 75 },
      { name: 'Git', percent: 90 },
      { name: 'UiPath', percent: 90},
      { name: 'Blue Prism', percent: 90}
    
  ]
    
  };

  private work: any = [
    {
      position: 'Lead Software Engineer',
      employer: 'Wells Fargo',
      date: 'Oct 2021 - Jan 2023',
      details: [
        'Led newly formed production support team, supporting 94 bots across 11 automations',
        'Successfully completed 2.06M transactions in 2022, resulting in an estimated savings' +
          ' of $2.75M and 88,000 hours',
        'Drove root cause analysis for critical issues, proposing workarounds to maintain business continuity',
        'Provided monthly incident trend reports to dev managers',
        'Created production tickets leading to code changes, raising transaction success rate from 96.6% to 99.97% YTD',
      ],
    },
    {
      position: 'RPA Developer',
      employer: 'Pacific Gas & Electric',
      date: 'May 2021 - Sep 2021',
      details: [
        'Created Process Solution Design Document, Technical Design Document, and Test Case Plan',
        'Communicated with the clients to gather requirements and confirm process design criteria',
        'Mapped out process design by creating Process Design Documents and flowchart diagrams (Both As-Is and To-Be)',
      ],
    },
    {
      position: 'RPA Developer',
      employer: 'Farmers Insurance',
      date: 'Jan 2021 - May 2021',
      details: [
        'Designed numerous workflows for each part of the automation suite process',
        'Structured workflows within Robotic Enterprise Framework and added additional exception handling, logging, and validation capabilities',
        'Automated downloading of claim information and copying all files to a specified shared folder',
      ],
    },
  ];

  private education: any = [
    {
      school: 'San Jose State University',
      location: 'San Jose, CA',
      degree: 'B.S. Computer Engineering',
      date: 'May 2020',
      coursework: [
        'Data Structures and Algorithms',
        'Mobile Software Engineering',
        'Data Science',
        'Operating Systems',
        'Computer Architecture and Design',
      ],
      gpa: '3.45'
    },
  ];

  private projects: any = [
    {
      name: 'GGs Store App',
      shortDescription:
        'This application is designed with functionality that would make virtual shopping much simpler.',
      longDescription:
        'This application is designed with functionality that would make virtual shopping much simpler! Customers can sign up for an account, place orders, view their order history, and specific location inventory. It also comes with an additional interface for managing your business. Managers can view and replenish location inventory, add new products, and view the order history of specific locations. This application used Entity Framework Core to connect to a PostgreSQL database, ASP.NET Core API to create a RESTful API, and HTML, CSS, BootstrapJS, and Javascript to create the front end.',
      technologies:
        'ASP.NET Core, Entity Framework Core, ASP.NET MVC, Postgre SQL',
      sourceCodeLink: 'https://github.com/jjennings510/GGsStoreApp',
      images: [
        {
          title: 'App home',
          src: 'assets/images/GGs/inventory.png',
        },
        {
          title: 'Login',
          src: 'assets/images/GGs/login.png',
        },
        {
          title: 'App home',
          src: 'assets/images/GGs/inventory.png',
        },
      ],
    },
    {
      name: 'Dating App',
      shortDescription:
        'This application is designed with functionality that would make virtual shopping much simpler.',
      longDescription:
        'This application is designed with functionality that would make virtual shopping much simpler! Customers can sign up for an account, place orders, view their order history, and specific location inventory. It also comes with an additional interface for managing your business. Managers can view and replenish location inventory, add new products, and view the order history of specific locations. This application used Entity Framework Core to connect to a PostgreSQL database, ASP.NET Core API to create a RESTful API, and HTML, CSS, BootstrapJS, and Javascript to create the front end.',
      technologies:
        'ASP.NET Core, Entity Framework Core, ASP.NET MVC, Postgre SQL',
      sourceCodeLink: 'https://github.com/jjennings510/GGsStoreApp',
      images: [
        {
          title: 'App home',
          src: 'assets/images/GGs/inventory.png',
        },
        {
          title: 'Login',
          src: 'assets/images/GGs/login.png',
        },
        {
          title: 'App home',
          src: 'assets/images/GGs/inventory.png',
        },
      ],
    },
    {
      name: 'Portfolio Website',
      shortDescription:
        'This application is designed with functionality that would make virtual shopping much simpler.',
      longDescription:
        'This application is designed with functionality that would make virtual shopping much simpler! Customers can sign up for an account, place orders, view their order history, and specific location inventory. It also comes with an additional interface for managing your business. Managers can view and replenish location inventory, add new products, and view the order history of specific locations. This application used Entity Framework Core to connect to a PostgreSQL database, ASP.NET Core API to create a RESTful API, and HTML, CSS, BootstrapJS, and Javascript to create the front end.',
      technologies:
        'ASP.NET Core, Entity Framework Core, ASP.NET MVC, Postgre SQL',
      sourceCodeLink: 'https://github.com/jjennings510/GGsStoreApp',
      images: [
        {
          title: 'App home',
          src: 'assets/images/GGs/inventory.png',
        },
        {
          title: 'Login',
          src: 'assets/images/GGs/login.png',
        },
        {
          title: 'App home',
          src: 'assets/images/GGs/inventory.png',
        },
      ],
    },
  ];

  getAbout(): any {
    return this.about;
  }

  getSkills(): any {
    return this.skills;
  }

  getWorkExperience(): any {
    return this.work;
  }

  getEducation(): any {
    return this.education;
  }

  getProjects(): any {
    return this.projects;
  }
}
