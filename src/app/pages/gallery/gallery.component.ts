import { Component, inject, OnInit } from '@angular/core';
import { GalleryService } from '../../core/services/gallery.service';
import { Gallery } from '../../core/interfaces/gallery.model';
import { GalleryGridComponent } from '../../ui/gallery-grid/gallery-grid.component';

@Component({
  selector: 'app-gallery',
  imports: [GalleryGridComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  private galleryService = inject(GalleryService);

  private gallery: Gallery[] = [];
  public visibleImages: Gallery[] = [];

  private currentIndex: number = 0;
  private pageSize: number = 8;
  public pages: number = 1;
  public totalPages: number = 0;

  ngOnInit(): void {
    this.galleryService.getGallery().subscribe((gallery) => {
      this.gallery = gallery;
      this.visibleImages = gallery.slice(0, this.pageSize);
      this.totalPages = Math.ceil(this.gallery.length / this.pageSize);
    });
  }

  private updateVisibleImages() {
    this.visibleImages = this.gallery.slice(this.currentIndex, this.currentIndex + this.pageSize);
  }

  public nextSlide() {
    if (this.currentIndex + this.pageSize < this.gallery.length) {
      this.pages++;
      this.currentIndex += this.pageSize;
      this.updateVisibleImages();
    }
  }

  public prevSlide() {
    if (this.currentIndex - this.pageSize >= 0) {
      this.pages--;
      this.currentIndex -= this.pageSize;
      this.updateVisibleImages();
    }
  }
}
