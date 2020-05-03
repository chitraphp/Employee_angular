import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
//import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() employee:Employee;
  // employees:Employee[];

  constructor() { }

  ngOnInit(): void {
  }

  setClasses(){
    let classes = {
      
    }
    return classes;
  }
  onDelete(employee) {
    console.log(employee.name);
  }
  // addEmployee(newEmployee:Employee){
  //   this.employees.push(newEmployee);
  // }

}
