import { Injectable } from '@angular/core';
import {Employee} from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeService:Employee[]

  constructor() {this.employeeService=[
    {
      id:1,
      name:'chitra'
    },
    {
      id:2,
      name:'suchi'
   },
   {
    id:3,
    name:'Wendy'
  },
  {
    id:4,
    name:'srini'
  }
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
  }}
