import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/Employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees:Employee[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employees=this.employeeService.employeeService;
  }

}
