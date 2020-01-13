import { Component, OnInit } from '@angular/core';

import { Project } from '../../models/Project';
import { ProjectService } from '../project.service';

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
  projects: Project[] = [];

  selectedProject: Project;
  searchedProject: Project;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
      this.projects = this.projectService.getAll();
  }

  selectProject(project: Project) {
    this.selectedProject = this.projectService.get(project.id);
  }

  addProject(project: Project) {
    this.projectService.add(project);
  }

  searchProject(project: Project) {
    this.searchedProject = project;
  }
}
