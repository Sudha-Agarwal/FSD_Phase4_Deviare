import { Component } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  user = {email:'', password:''};
  constructor(private ds:DataService){ }

  onSubmit(){
    console.table(this.user);
    this.ds.checkLogin(this.user).subscribe({
      next: response =>console.log(response),
      error: error => console.log("Error: " + error),
      complete: ()=> console.log("data complete")
    });
  }
}
