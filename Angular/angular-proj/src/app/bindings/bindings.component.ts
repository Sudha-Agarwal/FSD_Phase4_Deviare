import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent {
  buttonClickedCount = 0;
   Componentname:string = "Bindings!!!!";
   isRed:boolean = false;
   isActive = true;
   isDisabled = false;
   isOpaque:boolean = false;

   imgSrc:string = "../assets/bootstrap-4-logo-png-transparent.png";
   isValid:boolean = false;

   onButtonClick(){
    this.buttonClickedCount ++;

   }

}
