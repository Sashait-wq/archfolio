import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-success-modal',
  imports: [MatIcon, MatButton],
  templateUrl: './success-modal.component.html',
  styleUrl: './success-modal.component.scss'
})
export class SuccessModalComponent {
  private dialogRef = inject(DialogRef);

  public onClose(): void {
    this.dialogRef.close();
  }
}
