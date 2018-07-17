import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  patient_setting: string;
  prevalence_percent: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {patient_setting: 'Cancer-low prevalence', prevalence_percent:"5%"},
  {patient_setting: 'Cancer-moderate prevalence', prevalence_percent:"10%"},
  {patient_setting: 'Cancer-high prevalence', prevalence_percent:"15%"},
  {patient_setting: 'Cardiovascular disease', prevalence_percent:"10%"},
  {patient_setting: 'Diabetes Type-1', prevalence_percent:"14%"},
  {patient_setting: 'Diabetes Type-2', prevalence_percent:"11%"},
  {patient_setting: 'General population', prevalence_percent:"10%"},
  {patient_setting: 'New fathers', prevalence_percent:"10%"},
  {patient_setting: 'Palliative care', prevalence_percent:"10%"},
  {patient_setting: 'Perinatal care', prevalence_percent:"10%"},
  {patient_setting: 'Post heart-attack', prevalence_percent:"10%"},
  {patient_setting: 'Perinatal care', prevalence_percent:"10%"}
];
@Component({
  selector: 'app-input-parameters',
  templateUrl: './input-parameters.component.html',
  styleUrls: ['./input-parameters.component.css']
})
export class InputParametersComponent
{
  displayedColumns: string[] = ['patient_setting', 'prevalence_percent'];
  dataSource = ELEMENT_DATA;
  prevalence: number = 0;
  prevalence1: number=0;
  screenpositive: number = 0;
  havedepression: number = 0;
  prevalenceSelected:number;
  prevalenceSelected2:number;
  screenPositive:number=this.screenpositive;
  haveDepression:number=this.havedepression;
  ShowResult:number;
  ShowResult1:number;
  Howmany:number;
  havedep:number=0;
  falsepositive: number=0;
  Falsepositive: number;
  falsepositivepercent:number=0;
  Falsepositivepercent:number;

  Calc(){

    let elems = document.querySelectorAll('.screengraphic:nth-child(n) .active-path');
    for(let i=0; i<200;i++)
    {
       elems[i].setAttribute('style', 'fill:gray');

    }
    if( this.prevalenceSelected2 > 0)
    {
     this.prevalence= Math.round(0.88*this.prevalenceSelected2+(100-this.prevalenceSelected2-Math.round((100-this.prevalenceSelected2)*0.85)));
     this.screenpositive=this.prevalence;
     this.prevalence1=Math.round(100*(this.prevalenceSelected2*0.88/(this.prevalenceSelected2*0.88+(100-this.prevalenceSelected2)*0.15)));
     this.havedepression=this.prevalence1;
     this.havedep= Math.round(this.havedepression*this.prevalence/100);
     this.falsepositive = this.screenpositive-this.havedep;
     this.falsepositivepercent = 100 - this.havedepression;
    }
    else
    {
    this.prevalence=Math.round(0.88*this.prevalenceSelected+(100-this.prevalenceSelected-Math.round((100-this.prevalenceSelected)*0.85)));
    this.screenpositive=this.prevalence;
    this.prevalence1=Math.round(100*(this.prevalenceSelected*0.88/(this.prevalenceSelected*0.88+(100-this.prevalenceSelected)*0.15)));
    this.havedepression=this.prevalence1;
    }
  }

  depression = [
  {
      "setting": "Primary care",
      "prevalence": 10
  },
  {
      "setting": "General population",
      "prevalence": 12
  },
  {
      "setting": "Perinatal care",
      "prevalence": 14
  },
  {
      "setting": "New fathers",
      "prevalence": 11
  },
  {
      "setting": "Cardiovascular disease",
      "prevalence": 13
  },
  {
      "setting": "Post heart-attack",
      "prevalence": 15
  },
  {
      "setting": "Cancer-low prevalence",
      "prevalence": 5
  },
  {
      "setting": "Cancer-moderate prevalence",
      "prevalence": 10
  },
  {
      "setting": "Cancer-high prevalence",
      "prevalence": 15
  },
  {
      "setting": "Diabetes Type-1",
      "prevalence": 14
  },
  {
      "setting": "Diabetes Type-2",
      "prevalence": 11
  },
  {
      "setting": "Palliative care",
      "prevalence": 10
  }
]
}
