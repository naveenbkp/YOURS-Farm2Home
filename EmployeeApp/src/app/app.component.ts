import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeService } from './services/employee.service';
import { Employee } from './models/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'EmployeeApp';

  employees: Employee[] = [];

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