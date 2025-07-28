import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Gallery } from '../../../core/interfaces/gallery.model';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-gallery-grid',
  imports: [MatIconButton, MatIcon],
  templateUrl: './gallery-grid.component.html',
  styleUrl: './gallery-grid.component.scss'
})
export class GalleryGridComponent {
  @Input() images: Gallery[] = [];
  @Input() index!: number;
  @Input() total!: number;
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();
  public onNext(): void {
    this.next.emit();
  }

  public onPrev(): void {
    this.prev.emit();
  }
}
