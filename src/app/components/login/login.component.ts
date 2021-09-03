import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  ngOnInit(){

  }

  hide = true;
  
  onClickSubmit(data) {
    // alert("Entered Email id : " + data.emailid);
    window.console.log("data submitted",data);
 }
}
