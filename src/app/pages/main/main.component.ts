import { Component, inject, OnInit } from '@angular/core';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { MainService } from '../../features/main.service';
import { MainHero } from '../../core/interfaces/main.model';

@Component({
  selector: 'app-main',
  imports: [HeroComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  private mainService = inject(MainService);

  public mainHero!: MainHero;

  ngOnInit(): void {
    this.mainService.getMain().subscribe((response) => {
      this.mainHero = response.hero;
    });
  }
}
