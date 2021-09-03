import { Component, OnInit,EventEmitter, ChangeDetectorRef,Output, Input,SimpleChanges } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PrescriptionDialogComponent } from '../../prescription-dialog/prescription-dialog.component';
import { PatientChartComponent} from '../../patient-chart/patient-chart.component'
import { Data } from '@angular/router';
import { isThisHour } from 'date-fns';

export interface format {
  ID:number;
  Date: string;
  MedicationTitle: string;
  MedicationData: string;
  Amount: string;
  Refills: number;
  Status: string;
}

const data: format[] = [
  {
    ID:Date.now(),
    Date: '5/18/2000',
    MedicationTitle: 'Crestor 10mg oral',
    MedicationData:
      'jlsdkgjd fklgjdfklsgj; agjkl;dfgagsa agjgkl;jitOnlyGuardedExpression;dfjklg',
    Amount: '1',
    Refills: 1,
    Status: 'pending',
  },
  {
    ID:Date.now(),

    Date: '5/16/2002',
    MedicationTitle: 'Degmol 5mg oral',
    MedicationData:
      'jlsdkgjd fklgjdfklsgj; agjkl;dfgagsa agjgkl;jitOnlyGuardedExpression;dfjklg',
    Amount: '2',
    Refills: 3,
    Status: 'not pending',
  },
];

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss'],
})
export class PrescriptionComponent implements OnInit {
  constructor(private dialog: MatDialog,private changeDetectorRefs: ChangeDetectorRef) {}
  ngOnInit(): void {}
  @Input() status:boolean;
  @Input() input:object;
  @Output() sub =new EventEmitter<boolean>();;
  @Output() dispO =new EventEmitter<boolean>();

  temp:format={
    ID:0,
    Date: '',
    MedicationTitle: '',
    MedicationData:
      '',
    Amount: '',
    Refills: 0,
    Status: '',
  };

  ngOnChanges(input: SimpleChanges) {
    // console.log(input.status.currentValue);
    this.temp.ID=Date.now();
    this.temp.MedicationTitle="MedicineX";
    this.temp.MedicationData=`Sig: ${input.input.currentValue.direction.action} ${input.input.currentValue.direction.amount} ${input.input.currentValue.direction.dosageForm} ${input.input.currentValue.direction.frequency} ${input.input.currentValue.direction.route} \n 
    Pharm Notes: ${input.input.currentValue.Pharmacy.description}`
    this.temp.Date="16/08/2022"
    this.temp.Amount=input.input.currentValue.patientDirection.dispenseAmount;
    this.temp.Refills=input.input.currentValue.patientDirection.refills;
    this.temp.Status="pending";
    if(input.status.currentValue){
      this.processMedication();
    }
  }
  displayedColumns: string[] = [
    'Date',
    'Medication',
    'Amount',
    'Refills',
    'Status',
    'Edit',
    'Remove',
  ];
  dataSource = [...data];

  addMedication(){
    this.dispO.emit(false);
    // console.log("toggle");
  }
  
  submit(){
    this.sub.emit(true);
  }

  remove(x){
    console.log(x);
  }
  processMedication(){
      data.push(this.temp);
      console.log("refreshed",this.dataSource);
      this.dataSource = [...data];
  }

  // processMedication() {
  //   const dialogRef = this.dialog.open(PrescriptionDialogComponent, {
  //     panelClass: 'dialog',
  //     width:'100%',
  //     height:'100%'
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //     // if (result.Title) {
  //       data.push(result);
  //       console.log("refreshed",this.dataSource);
  //       this.dataSource = [...data];
  //     // }
  //   });
  // }

}
