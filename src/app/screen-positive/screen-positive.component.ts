import { Component, OnInit } from '@angular/core';
import { Input, ElementRef, ViewChildren, Renderer } from '@angular/core';
@Component({
  selector: 'app-screen-positive',
  templateUrl: './screen-positive.component.html',
  styleUrls: ['./screen-positive.component.css']
})
export class ScreenPositiveComponent{

  @Input() screenPositive: number = 0;
  @Input() haveDepression: number = 0;
  @Input() Falsepositive:number;
  @Input() Falsepositivepercent:number;
  @Input() Howmany:number;
  @Input() falsenegative: number =0;
  @Input() Falsenegative: number =0;

}
