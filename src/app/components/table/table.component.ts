import { Component } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent {
  constructor(private customerService:CustomerService){}

  customers: Customer[] = [];
  
  findAll():void{
    this.customerService.findAll()
    .subscribe(response => this.customers = response);
  }

  ngOnInit(){
    this.findAll();
  }
}
