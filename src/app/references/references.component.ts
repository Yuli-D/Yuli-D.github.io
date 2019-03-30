import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {

  public references: Array<object>;
  constructor() {

   }

  ngOnInit() {
    this.init();
  }

  private init() {
    this.references = [
      {
        label: 'Levis B, Benedetti A, Riehm KE, et al. The diagnostic accuracy of the Patient Health Questionnaire-9 (PHQ-9) for detecting major depression: an individual participant data meta-analysis. BMJ. Accepted. ',
        link: ''
      },
      {
        label: 'U.S. Preventive Services Task Force. Screening for depression in adults: U.S. Preventive Services Task Force recommendation statement. Ann Intern Med. 2009;151:784-792.',
        link: 'https://www.ncbi.nlm.nih.gov/pubmed/19949144'
      },
      {
        label: 'National Collaborating Center for Mental Health. The NICE Guideline on the Management and Treatment of Depression in Adults (updated edition). London: NICE; 2010.',
        link: 'https://www.ncbi.nlm.nih.gov/pubmed/22132433'
      },
      {
        label: 'National Collaborating Centre for Mental Health. Depression in Adults with a Chronic Physical Health Problem: The NICE Guideline on Treatment and Management. Leicester (UK): The British Psychological Society & The Royal College of Psychiatrists; 2010.',
        link: 'https://www.ncbi.nlm.nih.gov/books/NBK82916/'
      },
      {
        label: 'Gavin NI, Gaynes BN, Lohr KN, Meltzer-Brody S, Gartlehner G, Swinson T. Perinatal depression: A systematic review of prevalence and incidence. Obstet Gynecol. 2005;106:1071-1083.',
        link: 'https://www.ncbi.nlm.nih.gov/pubmed/16260528'
      },
      {
        label: 'Vesga-Lopez O, Blanco C, Keyes K, Olfson M, Grant BF, Hasin DS. Psychiatric disorders in pregnant and postpartum women in the United States. Arch Gen Psychiatry. 2008;65:805-815.',
        link: 'https://www.ncbi.nlm.nih.gov/pubmed/18606953'
      },
      {
        label: 'Mitchell AJ, Vaze A, Rao S. Clinical diagnosis of depression in primary care: a meta-analysis. Lancet. 2009;374:609-619.',
        link: 'https://www.ncbi.nlm.nih.gov/pubmed/19640579'
      },
      {
        label: 'Siu AL, and the US Preventive Services Task Force (USPSTF). Screening for Depression in Adults: US Preventive Services Task Force Recommendation Statement. JAMA. 2016;315:380-387.',
        link: 'https://www.ncbi.nlm.nih.gov/pubmed/26813211'
      },
      {
        label: 'Allaby M. Screening for depression: A report for the UK National Screening Committee (Revised report). London, United Kingdom: UK National Screening Committee; 2010.',
        link: ''
      },
      {
        label: 'Joffres M, Jaramillo A, Dickinson J, et al. Recommendations on screening for depression in adults. CMAJ. 2013;185:775-782.',
        link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3680556/'
      }
    ];
  }
}
