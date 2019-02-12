import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  public title = 'pavan';

  constructor() {
    console.log('constructor code running')
   }

  ngOnInit() {

  }

  changeTitle(userTypedValue){
    this.title = userTypedValue;
  }

}
