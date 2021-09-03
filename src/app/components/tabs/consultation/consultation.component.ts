import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {
  @Output() next =new EventEmitter<boolean>();;

  constructor() { }

  nextStep(){
    this.next.emit(true);
  }
  ngOnInit(): void {
  }
  SmokingStatus : string;



}
