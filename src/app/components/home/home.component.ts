import { Component, OnInit,Input } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/Employee';
import {FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees:Employee[];
  name="Form Control Demo";
  // @Input() nameControl:FormControl=new FormControl('john',[Validators.required,Validators.maxLength(6)]);
  formGroup:FormGroup=new FormGroup({firstName:new FormControl('suchith'),
  lastName:new FormControl('otturu'),
  age:new FormControl(30)});

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employees=this.employeeService.employeeService;
  }

  nameChange(){
    alert(`value before click--------> ${JSON.stringify(this.formGroup.value)}`);
    this.formGroup.setValue({firstName:'chiru'});
    alert(`value after click--------> ${JSON.stringify(this.formGroup.value)}`);
  }

}
