import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-diagnosis-dialog',
  templateUrl: './diagnosis-dialog.component.html',
  styleUrls: ['./diagnosis-dialog.component.scss'],
})
export class DiagnosisDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<DiagnosisDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {}

  temp={};
  ngOnInit() {}

  close() {

    this.dialogRef.close(this.temp);
  }

  onClickSubmit(data) {
    // window.console.log('data submitted', data);
    this.temp = {
      Title: data.Title,
      Code: data.Coding,
      Status: true,
      Occurence: 'Unknown',
      VerificationStatus: false,
      ReferredBy: '',
      Comments: '',
    };
    this.close();
  }

}
