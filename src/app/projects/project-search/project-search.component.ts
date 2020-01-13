import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { Project, priority } from '../../models/Project';

@Component({
  selector: 'ngptt-project-search',
  templateUrl: './project-search.component.html',
  styleUrls: ['./project-search.component.css']
})
export class ProjectSearchComponent implements OnInit {
  @Output() searching = new EventEmitter<Partial<Project>>();
  @ViewChild('filterName', { static : false }) name: ElementRef;
  @ViewChild('filterPriority', { static : false }) priority: ElementRef;
  @ViewChild('filterDone', { static : false }) done: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  search() {
    this.searching.emit({
      name: (this.name.nativeElement as HTMLInputElement).value,
      priority: (this.priority.nativeElement as HTMLInputElement).value as priority,
      done: !!(this.done.nativeElement as HTMLInputElement).value,
    })
  }
}
