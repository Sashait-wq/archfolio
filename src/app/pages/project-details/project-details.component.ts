import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Project } from '../../core/interfaces/project.model';
import { ProjectService } from '../../core/services/project.service';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-project-details',
  imports: [MatIcon, RouterLink],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private projectService = inject(ProjectService);
  public project?: Project;

  ngOnInit(): void {
    const projectId: number = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.projectService.getProjectId(projectId).subscribe((project) => {
      if (project) {
        this.project = project;
      }
    });
  }
}
