import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'ehrlogin-dialog',
  templateUrl: './ehrlogin-dialog.component.html',
  styleUrls: ['./ehrlogin-dialog.component.scss'],
})
export class EHRloginDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<EHRloginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {}

  hide = true;
  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }

  onClickSubmit(data) {
    window.console.log('data submitted', data);
  }
}
