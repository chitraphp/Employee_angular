import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { UserDetails } from 'src/app/models/UserDetails';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 
  constructor() { }
  demoTempVar:string="from child componenet";
  @Input('userDetails') userDetails:UserDetails;
  @Output() dataFromChild = new EventEmitter();

  ngOnInit(): void {
  }

  childClick()
  {
    this.dataFromChild.emit("Hey, Child here");
  }


}
