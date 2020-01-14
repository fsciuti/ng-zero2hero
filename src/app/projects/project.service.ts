import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
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

  private projectsSubject = new BehaviorSubject<Project[]>(this.projects);
  public projects$ = this.projectsSubject.asObservable();

  constructor() { }

  getAll(): Observable<Project[]>{
    return this.projects$;
  }

  add(project: Project) {
      this.projects.push({...project, id: this.projects.length + 1});
      this.projectsSubject.next(this.projects.slice());
  }

  get(id: number): Observable<Project> {
      return this.projects$.pipe(
        map((projects: Project[]) => ({...projects.find(project => project.id === id)}))
      );
  }

  update(project: Project) {
    this.projects = this.projects.map(p => p.id === project.id ? { ...p, ...project } : p);
    this.projectsSubject.next(this.projects.slice());
  }
}
