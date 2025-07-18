import { Component, inject, OnInit } from '@angular/core';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { MainService } from '../../features/main.service';
import { MainAbout, MainFocus, MainHero } from '../../core/interfaces/main.model';
import { AboutComponent } from '../../shared/components/about/about.component';
import { FocusComponent } from '../../shared/components/focus/focus.component';

@Component({
  selector: 'app-main',
  imports: [HeroComponent, AboutComponent, FocusComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  private mainService = inject(MainService);

  public mainHero!: MainHero;
  public mainAbout!: MainAbout;
  public mainFocus!: MainFocus[];

  ngOnInit(): void {
    this.mainService.getMain().subscribe((response) => {
      this.mainHero = response.hero;
      this.mainAbout = response.about;
      this.mainFocus = response.focus;
    });
  }
}
