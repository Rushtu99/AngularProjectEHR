import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-medication',
  templateUrl: './new-medication.component.html',
  styleUrls: ['./new-medication.component.scss']
})
export class NewMedicationComponent implements OnInit {

  @Output() update = new EventEmitter<object>();
  @Output() close = new EventEmitter<Boolean>();

  ngOnInit() {
  }

  temp:object;
  updateMedication(data: object) {
    this.update.emit(data);


  }

  closeMedication() {
    this.close.emit();
  }
  constructor() { }
}
