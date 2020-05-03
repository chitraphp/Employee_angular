import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {Employee} from '../../models/Employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @Output() addEmployee: EventEmitter<Employee> = new EventEmitter();
  empId:number;
  empName:string;

  constructor() { }

  ngOnInit(): void {}

  onSubmit(){
    const employee = {
      id: this.empId,
      name:this.empName
    }
    this.addEmployee.emit(employee);
  }


}
