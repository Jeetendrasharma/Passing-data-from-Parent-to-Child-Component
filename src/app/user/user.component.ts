import { Component, OnInit, Input } from '@angular/core'; //JD

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() hero;   //JD
  constructor() { }

  ngOnInit() {
  }

}