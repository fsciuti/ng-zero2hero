import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  selectedProject: Project;
  searchedProject: Project;

  constructor(public projectService: ProjectService, private router: Router) { }

  ngOnInit() {}

  selectProject(project: Project) {
    this.router.navigate(['/projects', 'detail', project.id]);
  }

  addProject(project: Project) {
    this.projectService.add(project);
  }

  searchProject(project: Project) {
    this.searchedProject = project;
  }
}
