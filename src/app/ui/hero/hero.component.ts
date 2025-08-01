import { Component, Input } from '@angular/core';
import { Images, MainHero } from '../../core/interfaces/main.model';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [MatIcon, MatIconButton, NgIf, RouterLink],
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
    return this.hero.images[this.currentIndex] as Images;
  }

  public next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.hero.images.length;
  }

  public prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.hero.images.length) % this.hero.images.length;
  }

  public get currentId(): string {
    return this.currentImage.id;
  }
}
