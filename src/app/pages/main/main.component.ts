import { Component, inject, OnInit } from '@angular/core';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { MainService } from '../../features/main.service';
import { MainAbout, MainFocus, MainHero } from '../../core/interfaces/main.model';
import { AboutComponent } from '../../shared/components/about/about.component';
import { FocusComponent } from '../../shared/components/focus/focus.component';
import { ProjectService } from '../../features/project.service';
import { Project } from '../../core/interfaces/project.model';
import { MainProjectsComponent } from '../../shared/components/main-projects/main-projects.component';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [HeroComponent, AboutComponent, FocusComponent, MainProjectsComponent, NgIf, AsyncPipe],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  private mainService = inject(MainService);

  private projectService = inject(ProjectService);

  public mainHero!: MainHero;
  public mainAbout!: MainAbout;
  public mainFocus!: MainFocus[];
  public projects$: Observable<Project[]> = this.projectService.getProjects();

  ngOnInit(): void {
    this.mainService.getMain().subscribe((response) => {
      this.mainHero = response.hero;
      this.mainAbout = response.about;
      this.mainFocus = response.focus;
      console.log(this.mainFocus);
    });
  }
}
