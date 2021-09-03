import { Component, OnInit,Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-patient-chart',
  templateUrl: './patient-chart.component.html',
  styleUrls: ['./patient-chart.component.scss']
})
export class PatientChartComponent implements OnInit {

  status:boolean=false;
  temp:object;
  constructor() { }
  ngOnInit(): void {
  }
  disp:boolean = true;
  step = new FormControl(2);
  
  toggleChild(){
    this.disp = !this.disp;
  }

  nextStep() {
    if(this.step.value<4){
      this.step.setValue(this.step.value+1);
      console.log(this.step.value);
    }
  }
  submit(){
    console.log("prescription submitted")
  }

  updateMedication(data:object){
    this.status=true;
    this.temp=data;
    this.toggleChild();
  }

  closeMedication(){
    this.status=false;
    console.log("medication closed");
    this.toggleChild();
  }

}
