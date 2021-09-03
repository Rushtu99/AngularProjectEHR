import { Component, OnInit, ChangeDetectorRef,Output,EventEmitter } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { DiagnosisDialogComponent} from '../../diagnosis-dialog/diagnosis-dialog.component'


export interface format {
  Title: string;
  Code: string;
  Status: boolean;
  Occurence: string;
  VerificationStatus: boolean;
  ReferredBy: string;
  Comments: string;
}

const data: format[] = [
  {
    Title: 'HTN',
    Code: 'ICDN:$8290',
    Status: true,
    Occurence: 'Unknown',
    VerificationStatus: false,
    ReferredBy: 'jfkl;ja',
    Comments: 'shnfjlsh',
  },
  {
    Title: 'HTMN',
    Code: 'ICDN:$8dfhf',
    Status: false,
    Occurence: 'Unknown',
    VerificationStatus: false,
    ReferredBy: 'shfgwl;sa',
    Comments: '',
  },
]
@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.scss'],
})
export class DiagnosisComponent implements OnInit {

  constructor(private dialog: MatDialog,private changeDetectorRefs: ChangeDetectorRef) {
  }
  @Output() next =new EventEmitter<boolean>();;

  ngOnInit(): void {}
  displayedColumns:string[]=['Title','Code','Status','Occurence','Verification Status','Referred By','Comments','Edit']
  dataSource=[...data];

  nextStep(){
    this.next.emit(true);
  }
  addData(){
    const dialogRef = this.dialog.open(DiagnosisDialogComponent,{panelClass: 'dialog'});
    dialogRef.afterClosed().subscribe(result =>{
      if(result.Title){
        data.push(result);
        // console.log("refreshed",this.dataSource);
        this.dataSource=[...data];
      }
    });
  }


}
