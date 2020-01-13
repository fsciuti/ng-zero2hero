import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Project } from '../models/Project';

@Component({
  selector: 'ngptt-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  @Input() projects: Project[] = [];
  @Output() selected = new EventEmitter<Project>();

  constructor() { }

  ngOnInit() {
  }

  select(project: Project) {
    this.selected.emit(project);
  }
}
