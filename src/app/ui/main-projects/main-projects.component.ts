import { Component, Input } from '@angular/core';
import { Project } from '../../core/interfaces/project.model';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-projects',
  imports: [MatIcon, RouterLink],
  templateUrl: './main-projects.component.html',
  styleUrl: './main-projects.component.scss'
})
export class MainProjectsComponent {
  @Input() projects: Project[] = [];
}
