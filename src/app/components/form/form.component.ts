import { Component } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer.service';
import { TableComponent } from '../table/table.component';
import { CustomersharedService } from 'src/app/services/customershared.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent {

  constructor(private customerService:CustomerService, private customerSharedService: CustomersharedService){}


  customer = new Customer();
  
  customers: Customer[] = [];
  
  create(): void{
    this.customerService.create(this.customer)
    .subscribe(response => {
      this.customerSharedService.addCustomer(this.customer)
    });
    alert("Cliente adicionado com sucesso");
   
  }

}
