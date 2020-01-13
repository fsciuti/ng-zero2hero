import { Component, OnInit } from '@angular/core';

import { Project } from '../../models/Project';

@Component({
  selector: 'ngptt-project',
  templateUrl: './project-container.component.html',
  styles: [`
    .form-control.ng-invalid.ng-touched {
        border: 1px solid red;
    }
  `]
})
export class ProjectContainerComponent implements OnInit {
  projects: Project[] = [
    {
      id: 1,
      code: 'NHusYJl',
      name: 'Progetto Alpha',
      description: 'Lorem ipsum dolor sit amet.',
      start: new Date(2019, 1, 30),
      end: new Date(2019, 3, 15),
      priority: 'medium',
      done: true,
      tasks: []
    },
    {
      id: 2,
      code: 'SJieYKl',
      name: 'Progetto Beta',
      description: 'Lorem ipsum dolor sit amet.',
      start: new Date(2019, 3, 30),
      end: new Date(2019, 6, 15),
      priority: 'low',
      done: true,
      tasks: []
    },
    {
      id: 3,
      code: 'POjeGBs',
      name: 'Progetto Gamma',
      description: 'Lorem ipsum dolor sit amet.',
      start: new Date(2019, 8, 15),
      priority: 'low',
      done: false,
      tasks: []
    },
  ];

  selectedProject: Project;
  searchedProject: Project;

  constructor() { }

  ngOnInit() {
  }

  selectProject(project: Project) {
    this.selectedProject = project;
  }

  addNewProject(project: Project) {
    this.projects.push({
      id: this.projects.length,
      code: Math.random().toString(36).replace('0.', '').substring(2, 9),
      done: false,
      tasks: [],
      ...project
    });
  }

  searchProject(project: Project) {
    this.searchedProject = project;
  }
}
