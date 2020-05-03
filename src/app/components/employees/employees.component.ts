import { Component, OnInit } from '@angular/core';
import {Employee} from '../../models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees:Employee[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.employeeService.employeeService;
  }

  addEmployee(newEmployee:Employee){
    this.employees.push(newEmployee);
  }

}
