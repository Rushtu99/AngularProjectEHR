import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-prescription-dialog',
  templateUrl: './prescription-dialog.component.html',
  styleUrls: ['./prescription-dialog.component.scss']
})
export class PrescriptionDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<PrescriptionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {}

  ngOnInit(): void {
  }

  close() {

    this.dialogRef.close(this.temp);
  }
  temp={};

  onClickSubmit(data) {
     window.console.log('data submitted', data);
    this.temp = {
    Date: data.Date,
    MedicationTitle: data.MedicationTitle,
    MedicationData:data.MedicationData,
    Amount: data.Amount,
    Refills: data.Refills,
    Status: data.Status,
    };
    this.close();
  }
}
