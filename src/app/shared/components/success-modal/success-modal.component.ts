import { Component, inject } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-success-modal',
  imports: [MatButton, MatIcon],
  templateUrl: './success-modal.component.html',
  styleUrl: './success-modal.component.scss'
})
export class SuccessModalComponent {
  private dialogRef = inject(DialogRef);

  public onClose(): void {
    this.dialogRef.close();
  }
}
