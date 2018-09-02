import { Component, OnInit ,ViewChild } from '@angular/core';
import {Diff2Html} from 'diff2Html';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import { Chart } from 'chart.js';
import { ChartErrorEvent, ChartEvent, GoogleChartComponent } from 'angular-google-charts/esm5/public_api';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styles: [':host > *:not(h1) { display: inline-block !important; }']
})
export class ChartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public chartColors: any[] = [
    {
      backgroundColor :'#673ab7',
      borderColor: '#673ab7',
      pointBackgroundColor: '#673ab7',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
    
  public Item1ChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    fill: false, 
  };
  public Item1ChartLabels:string[] = [ '2008', '2009', '2010'];
  public Item1ChartType:string = 'line';
  public Item1ChartLegend:boolean = true;
 
  public Item1ChartData:any[] = [
    {data: [5.5, 5.9, 8.1], label: 'Item1 (Similarity)',fill: false, lineTension: 0,
    backgroundColor: 'black',borderColor:'black'}
  ];
 
  public Item1AChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: false
  };
  public Item1AChartLabels:string[] =[ '2008', '2009', '2010'];
  public Item1AChartType:string = 'line';
  public Item1AChartLegend:boolean = true;
 
  public Item1AChartData:any[] = [
    {data: [1, 8, 5], label: 'Item1A (Similarity)',fill: false, lineTension: 0},
  ];

  public Item7ChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: false
  };
  public Item7ChartLabels:string[] = [ '2008', '2009', '2010'];
  public Item7ChartType:string = 'line';
  public Item7ChartLegend:boolean = true;
 
  public Item7ChartData:any[] = [
    {data: [14, 2.0, 4.5], label: 'Item7 (Similarity)',fill: false, lineTension: 0},
  ];

  public Item7AChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: false
  };
  public Item7AChartLabels:string[] = [ '2008', '2009', '2010'];
  public Item7AChartType:string = 'line';
  public Item7AChartLegend:boolean = true;
 
  public Item7AChartData:any[] = [
    {data: [10, 8, 2], label: 'Item7A (Similarity)',fill: false, lineTension: 0},
  ];

}
