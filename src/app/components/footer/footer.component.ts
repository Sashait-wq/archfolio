import { Component, inject } from '@angular/core';
import { FooterService } from '../../core/services/footer.service';
import { Footer } from '../../core/interfaces/footer.model';
import { AsyncPipe, NgIf } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  imports: [MatIcon, RouterLink, NgIf, AsyncPipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private footerService = inject(FooterService);
  public information$: Observable<Footer> = this.footerService.getFooter();
  protected readonly encodeURIComponent = encodeURIComponent;
}
