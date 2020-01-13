import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Project } from '../models/Project';

@Component({
  selector: 'ngptt-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Project>();

  constructor() { }

  ngOnInit() {
  }

  submitProjectForm(form: NgForm) {
    this.submitted.emit({
        ...form.value
    });
  }
  
}
