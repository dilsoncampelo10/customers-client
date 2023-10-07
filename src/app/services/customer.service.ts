import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private request:HttpClient) { }

  private url: string = 'http://localhost:8080/customers';

  findAll():Observable<Customer[]>{
    return this.request.get<Customer[]>(this.url);
  }
}
