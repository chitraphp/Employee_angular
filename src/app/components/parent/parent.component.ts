import { Component, OnInit ,Input} from '@angular/core';
import { UserDetails} from 'src/app/models/UserDetails';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  
user:UserDetails={UserName:'chitra',UserAddress:'abcd',UserPhone:'1234'}
  ngOnInit(): void {
  }
  eventFromChild(abc:UserDetails){
    alert(abc);
  }
}


// interface UserDetails{
//     UserName:string,
//     UserAddress:string,
//     UserPhone
// }
