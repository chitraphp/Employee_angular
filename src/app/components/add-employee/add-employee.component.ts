import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {Employee} from '../../models/Employee';
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @Output() addEmployee: EventEmitter<Employee> = new EventEmitter();
  empId:number;
  empName:string;

  constructor(private service:EmployeeService) { }

  ngOnInit(): void {}

  onSubmit(){
    const employee = {
      id: this.empId,
      name:this.empName
    }
    // this.service.employeeSevice.push(employee);
     this.addEmployee.emit(employee);
  }


}
