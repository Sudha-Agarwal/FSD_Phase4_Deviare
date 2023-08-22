import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  dataFromParent = "Hello from parent";
  @ViewChild(ChildComponent) childComponent!: ChildComponent;
  receivedData1!:string;
  receivedData!:string;

  handleChildData(data:string){
    this.receivedData = data;
  }

  ngAfterViewInit(){
    this.childComponent.dataEmiiter.subscribe((data:string) => {
      this.receivedData1 = data;
    })

  }

}
