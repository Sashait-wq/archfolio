import { Component, Input } from '@angular/core';
import { Images, MainHero } from '../../core/interfaces/main.model';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [MatIcon, MatIconButton, RouterLink, NgIf],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @Input() hero!: MainHero;

  private currentIndex = 0;
  public get index(): number {
    return this.currentIndex + 1;
  }

  public get currentImage(): Images {
    return this.hero.images[this.currentIndex];
  }

  public next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.hero.images.length;
  }

  public prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.hero.images.length) % this.hero.images.length;
  }
}
