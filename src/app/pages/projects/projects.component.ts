import { Component, inject, OnInit } from '@angular/core';
import { ProjectService } from '../../core/services/project.service';
import { Project } from '../../core/interfaces/project.model';
import { ProjectPreviewComponent } from '../../ui/project-preview/project-preview.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [ProjectPreviewComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  private router = inject(Router);
  private projectService = inject(ProjectService);

  public projects: Project[] = [];

  public visibleProjects: Project[] = [];
  private currentIndex: number = 0;
  private pageSize: number = 3;
  public pages: number = 1;
  public totalPages: number = 0;

  ngOnInit() {
    this.projectService.getProjects().subscribe((data) => {
      this.projects = data;
      this.totalPages = Math.ceil(this.projects.length / this.pageSize);
      this.visibleProjects = data.slice(0, this.pageSize);
    });
  }

  private updateVisibleProjects(): void {
    this.visibleProjects = this.projects.slice(
      this.currentIndex,
      this.currentIndex + this.pageSize
    );
  }

  public nextSlide(): void {
    if (this.currentIndex + this.pageSize < this.projects.length) {
      this.pages++;
      this.currentIndex += this.pageSize;
      this.updateVisibleProjects();
    }
  }

  public prevSlide(): void {
    if (this.currentIndex - this.pageSize >= 0) {
      this.pages--;
      this.currentIndex -= this.pageSize;
      this.updateVisibleProjects();
    }
  }

  public projectDetails(id: number): void {
    this.router.navigate(['/projects', id]);
  }
}
