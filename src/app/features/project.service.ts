import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { Project } from '../core/interfaces/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends BaseService {
  public getProjects(): Observable<Project[]> {
    return this.get('projects.json');
  }
}
