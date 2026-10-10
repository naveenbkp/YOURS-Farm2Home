import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'https://localhost:7119/api/Employees';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
