import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() receivedData!:string;
  @Output() dataEmiiter = new EventEmitter<string>();

  emitData(){
    this.dataEmiiter.emit('Data from child');
  }
}
