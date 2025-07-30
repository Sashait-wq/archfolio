import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { map, Observable, tap } from 'rxjs';
import { Project } from '../interfaces/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends BaseService {
  public getProjects(): Observable<Project[]> {
    return this.get('projects.json').pipe(map((data) => data.projects));
  }

  public getProjectId(id: number): Observable<Project> {
    return this.get('projects.json').pipe(
      tap((data) => console.log(data)),
      map((data) => data.projects.find((project: Project) => +project.id === id)),
      tap((data) => console.log(data))
    );
  }
}
