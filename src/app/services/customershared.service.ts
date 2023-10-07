import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersharedService {

  constructor() { }

  private customerAddedSource = new Subject<Customer>();
  customerAdded$ = this.customerAddedSource.asObservable();

  addCustomer(customer: Customer) {
    this.customerAddedSource.next(customer);
  }
}
