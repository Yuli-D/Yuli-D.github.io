import { Component, OnInit } from '@angular/core';
import { Input, ElementRef, ViewChildren, Renderer } from '@angular/core';
@Component({
  selector: 'app-screen-negative',
  templateUrl: './screen-negative.component.html',
  styleUrls: ['./screen-negative.component.css']
})
export class ScreenNegativeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() screenPositive: number = 0;
  @Input() haveDepression: number = 0;
  @Input() Falsepositive:number;
  @Input() Falsepositivepercent:number;
  @Input() Howmany:number;
  @Input() falsenegative: number =0;
  @Input() Falsenegative: number =0;
  @Input() screenNegative:number=0;
  @Input() truenegative:number=0;
  @Input() truenegativepercent:number=0;
  @Input() falsenegativepercent:number=0;
}
