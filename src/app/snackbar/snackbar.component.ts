import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent {
  constructor(public snack:MatSnackBar){}

  opensnackbar(){
    this.snack.open("hello","action")
  }


  openSnack(message:any,action:any){
   let snackbar= this.snack.open(message,action,{duration:5000,horizontalPosition:'right',verticalPosition:'top'})

   snackbar.afterDismissed().subscribe(()=>{
    console.log('Dismiss works')
   })
   snackbar.onAction().subscribe(()=>{
    console.log('action works')
   })
  }
}
