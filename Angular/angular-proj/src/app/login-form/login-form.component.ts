import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  user = {email:'', password:''};
  constructor(private ds:DataService, private router:Router){ }

  isValid:boolean = false;

  onSubmit(){
    console.table(this.user);
    this.ds.checkLogin(this.user).subscribe({
      next: (response:any) =>{
        console.log(response);
        if(response.status == "success"){
          this.router.navigate(['']);
        }
      
      },
      error: error => console.log("Error: " + error),
      complete: ()=> console.log("data complete")
    });
  }
}
