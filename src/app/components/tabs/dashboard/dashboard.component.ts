import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Output() next =new EventEmitter<boolean>();;
  
  constructor() { }
  nextStep(){
    this.next.emit(true);
  }

  ngOnInit(): void {
  }

}
