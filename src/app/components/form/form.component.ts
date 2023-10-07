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


  customer = new Customer();
  
  customers: Customer[] = [];
  
  create(): void{
    this.customerService.create(this.customer)
    .subscribe(response => {this.customers.push(response)});
   
  }

}
