import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  convertText = "text to be converted by pipes";
  birthday = new Date(2022, 0, 1);

  itemPrice = 5.20;
  num = .25;

  get format(){
    return 'fullDate';
  }

  constructor(private ds: DataService){}

  userList$!: Observable<any[]>;

  ngOnInit(){
    this.userList$ = this.ds.getDataForPipe();
  }

  


}
