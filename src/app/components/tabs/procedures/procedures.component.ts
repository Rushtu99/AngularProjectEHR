import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.scss']
})
export class ProceduresComponent implements OnInit {

  @Output() next =new EventEmitter<boolean>();;

  constructor() { }

  LabControl = new FormControl();
  Lab = [
    'blood','urine','serum','stool','monotox','pleural','CSF','tissue','scrap','asitic fluid','bronchoscopy lavage'
  ];
  nextStep(){
    this.next.emit(true);
  }
  ngOnInit(): void {
  }

}
