import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-mobile-list',
  templateUrl: './product-mobile-list.component.html',
  styleUrls: ['./product-mobile-list.component.css']
})
export class ProductMobileListComponent {
products:any[] = [];

  constructor(private dataService:DataService){
    this.products = dataService.getMobiledata();
  }

 

 
 
}
