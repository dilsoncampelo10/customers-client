import { Component } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent {

  constructor(private customerService:CustomerService){}

  customers: Customer[] = [];
  
  findAll():void{
    this.customerService.findAll()
    .subscribe(response => this.customers = response);
  }

}
