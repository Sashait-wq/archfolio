import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Gallery } from '../interfaces/gallery.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService extends BaseService {
  public getGallery(): Observable<Gallery[]> {
    return this.get('gallery.json').pipe(map((data) => data.gallery));
  }
}
