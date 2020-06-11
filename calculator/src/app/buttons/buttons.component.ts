import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() sendResult = new EventEmitter<string>() ;
  result : string = ''
  longButtons : string[] = ['AC','CE']
  buttons : string[] = ['7','8','9','/','4','5','6','*','1','2','3','-','.','0','=','+']

  private prevValue : string = ''
  private curValue : string = ''

  addToExpression(value : string){

    if(this.result != '') {
      this.prevValue = this.curValue
      this.curValue = value
    }
    if (value == 'AC'){
      this.result = ''
      this.sendResult.emit(this.result)
    }else if (value == 'CE'){
      this.result = this.prevValue != '=' ? this.result.slice(0,-1) : this.result
      this.sendResult.emit(this.result)
    }else if (value == '='){
      this.result  = eval(this.result)
      this.sendResult.emit(this.result)
    }else {
      this.result += value
      this.sendResult.emit(this.result)
    }
  }

}
