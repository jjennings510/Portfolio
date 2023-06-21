import { Component } from '@angular/core';
import { WorkExperience } from '../_models/workExperience';
import { Education } from '../_models/education';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  works: WorkExperience[] = [
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
      ]
    },
    {
      position: 'RPA Developer',
      employer: 'Pacific Gas & Electric',
      date: 'May 2021 - Sep 2021',
      details: [
        'Created Process Solution Design Document, Technical Design Document, and Test Case Plan',
        'Communicated with the clients to gather requirements and confirm process design criteria',
        'Mapped out process design by creating Process Design Documents and flowchart diagrams (Both As-Is and To-Be)',
      ]
    },
    {
      position: 'RPA Developer',
      employer: 'Farmers Insurance',
      date: 'Jan 2021 - May 2021',
      details: [
        'Designed numerous workflows for each part of the automation suite process',
        'Structured workflows within Robotic Enterprise Framework and added additional exception handling, logging, and validation capabilities',
        'Automated downloading of claim information and copying all files to a specified shared folder',
      ]
    },
  ];
  educations: Education[] = [
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
      ]
    },
  ];

  toggleDetails(work: any) {
    work.displayDetails = !work.displayDetails;
  }
}
