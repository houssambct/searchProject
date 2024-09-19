import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent  {

  @Input() results: any[] = [];
  @Input() totalResults: number = 0;
  @Input() executionTime: number = 0;
  @Input() loading: boolean = false;

}
