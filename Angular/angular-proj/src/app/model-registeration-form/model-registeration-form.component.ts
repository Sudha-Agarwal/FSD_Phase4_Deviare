import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-model-registeration-form',
  templateUrl: './model-registeration-form.component.html',
  styleUrls: ['./model-registeration-form.component.css']
})
export class ModelRegisterationFormComponent {

  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  RegisterationForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.pattern(this.emailPattern), emailDomainValidator]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)])   
  });

  constructor(private ds:DataService){}

  get f(){
    return this.RegisterationForm.controls;
  }

  

  submit(){
    this.ds.createNewUser(this.RegisterationForm.value).subscribe({
      next: response=> console.log(response),
      error: err=>console.log(err),
      complete: ()=> console.log("complete")
    })
    
  }
}

export function emailDomainValidator(control: AbstractControl): ValidationErrors | null{
  let email = control.value;
  if(email && email.indexOf("@")!=-1){
    let[_,domain] = email.split("@");
    if(domain !== "gmail.com"){
      return{
        emailDomain:{
          parseDomain:domain
        }
      }
    }
  }
  return null;
}
