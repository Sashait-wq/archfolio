import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../core/interfaces/project.model';
import { LazyLoadImageDirective } from '../../shared/directives/lazy-load-image.directive';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-preview',
  imports: [LazyLoadImageDirective, MatIcon, MatIconButton, RouterLink],
  templateUrl: './project-preview.component.html',
  styleUrl: './project-preview.component.scss'
})
export class ProjectPreviewComponent {
  @Input() projects: Project[] = [];
  @Input() index!: number;
  @Input() total!: number;
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();
  @Output() project = new EventEmitter<number>();

  public viewMore(projectId: number): void {
    this.project.emit(projectId);
  }

  public onNext(): void {
    this.next.emit();
  }

  public onPrev(): void {
    this.prev.emit();
  }
}
