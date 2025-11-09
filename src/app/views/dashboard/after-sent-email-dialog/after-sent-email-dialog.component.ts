import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-after-sent-email-dialog',
  standalone: true,
  imports: [],
  templateUrl: './after-sent-email-dialog.component.html',
  styleUrls: ['./after-sent-email-dialog.component.css']
})
export class AfterSentEmailDialogComponent {
  title: string = '';
  message: string = '';

  constructor(
    private dialogRef: MatDialogRef<AfterSentEmailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; message: string }
  ) {
    this.title = data?.title ?? '';
    this.message = data?.message ?? '';
  }

  cerrar() {
    this.dialogRef.close();
  }
}
