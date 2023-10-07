import { Component } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer.service';
import { CustomersharedService } from 'src/app/services/customershared.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent {
  constructor(private customerService:CustomerService,private customerSharedService: CustomersharedService){
    this.customerSharedService.customerAdded$.subscribe(customer => {
      this.customers.push(customer);
      
    })
  }

  customers: Customer[] = [];
  
  findAll():void{
    this.customerService.findAll()
    .subscribe(response => this.customers = response);
  }

  delete(id:number):void{
    this.customerService.delete(id)
    .subscribe(response => {
      let index = this.customers.findIndex(obj => {
        return obj.id == id;
      })

      this.customers.splice(index,1);

      alert("Cliente removido")
    })
  }

  ngOnInit(){
    this.findAll();
  }
}
