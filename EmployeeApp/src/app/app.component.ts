import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeService } from './services/employee.service';
import { CommonModule } from '@angular/common';
import { Product } from './models/Product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'EmployeeApp';

  employees: Product[] = [];

  constructor(private employeeService: EmployeeService) {}
  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        this.employees = data;
        console.log("Employess",this.employees);
      },
      error: (error) => {
        console.error('Error fetching employees:', error);
      }
    });
  }
}