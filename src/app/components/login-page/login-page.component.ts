import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { EHRloginDialogComponent} from '../ehrlogin-dialog/ehrlogin-dialog.component';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  btn1(){
    this.dialog.open(EHRloginDialogComponent,{panelClass: 'dialog'});
  }


  btn2(){
    console.log("button2 pressed");
  }

}

