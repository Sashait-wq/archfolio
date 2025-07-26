import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccessModalComponent } from '../../shared/components/success-modal/success-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private matDialog = inject(MatDialog);

  public openSuccessModal(): void {
    this.matDialog.open(SuccessModalComponent, {
      disableClose: true
    });
  }
}
