import { Component, OnInit, Input } from '@angular/core';

import { Project } from '../../models/Project';

@Component({
  selector: 'ngptt-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  @Input() project: Project;

  constructor() { }

  ngOnInit() {
  }

}
