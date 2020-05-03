import { Injectable } from '@angular/core';
import {Employee} from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeSevice:Employee[]

  constructor() { }
  employeeService=[
    {

      id:1,
      name:'chitra'
    },
    {
      id:2,
      name:'suchi'}
  ]
  
  // getEmployees(){
  //   return [
  //     {
  //       id:1,
  //       name:'chitra'
  //     },
  //     {
  //       id:2,
  //       name:'suchi'
  //     }
  //   ]
  //}
}
