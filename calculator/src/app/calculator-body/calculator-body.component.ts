import { Component, OnInit, ViewChild, Output } from '@angular/core';

@Component({
  selector: 'app-calculator-body',
  templateUrl: './calculator-body.component.html',
  styleUrls: ['./calculator-body.component.css']
})
export class CalculatorBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  result : string = ''
  receiveResult($event){
    this.result = $event
  }


  

}
