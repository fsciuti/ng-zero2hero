import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Project } from '../../models/Project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'ngptt-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project$: Observable<Project>;
  editMode = false;

  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit() {
    this.project$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.projectService.get(+params.get('id')))
    );
  }

  changeEditMode() {
    this.editMode = !this.editMode;
  }

  updateProject(project: Project) {
    this.projectService.update(project);
    this.changeEditMode();
  }
}
