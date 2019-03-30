import { Component, Input, ElementRef, ViewChildren, Renderer, OnChanges } from '@angular/core';
@Component({
  selector: 'app-screen-positive-graphic',
  templateUrl: './screen-positive-graphic.component.html',
  styleUrls: ['./screen-positive-graphic.component.css']
})
export class ScreenPositiveGraphicComponent implements OnChanges{

  @Input() ShowResult: number;
  @Input() Howmany:number;
  @Input() ScreenNegative:number;
  @Input() falsenegative:number;

ngOnChanges() {
  this.setMyStyles();
}

setMyStyles() {

if(this.ShowResult>0)
{
  let elems = document.querySelectorAll('.screengraphic:nth-child(n) .active-path');
  for(let i=0; i<this.ShowResult*2;i++)
  {

     elems[i].setAttribute('style', 'fill:red');
  }

     for(let j=0; j<this.Howmany*2;j++)
     {
       elems[j].setAttribute('style', 'fill:#2E75B6')
     }
    for(let k=elems.length - 1;k >= elems.length - this.falsenegative*2;k--)
    {

      elems[k].setAttribute('style', 'fill:black')
    }

  }
}
}
