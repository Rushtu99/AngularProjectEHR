import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  element = 2;
  constructor() { }

  ngOnInit(): void {
  }

  check(id){
    if(id == this.element){
      return true;
    }
    return false;
  }

  clicked1(event){
    this.element = event.srcElement.id;
    console.log(event.srcElement.id);

  }
  clicked2(event){
    this.element = event.srcElement.id;
    console.log(event.srcElement.id);

  }
  clicked3(event){
    this.element = event.srcElement.id;
    console.log(event.srcElement.id);

  }
  clicked4(event){
    this.element = event.srcElement.id;
    console.log(event.srcElement.id);

  }

}
